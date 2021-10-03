import bcrypt from 'bcrypt';
import { MemberModel } from "../model/member.model.js";
import { signToken, decodeToken } from '../utils/jwt.js';

const saltRounds = 10;
const { getMemberInfo, signup } = MemberModel;

export class MemberController {
    constructor() {}

    static async signup(req, res) {
        const { id, password, name, email } = req.body;
        const dupCheck = await getMemberInfo(id);
        const validate = ['id', 'password', 'name', 'email'];

        if (dupCheck) {
            res.status(400).send({ error: 'These are duplicated IDs.' });

            return;
        }

        for (const key of validate) {
            if (!req.body[key]) {
                res.status(400).send({ error: `${key} is a required value.` });

                return;
            }
        }

        const hashPassword = await new Promise(resolve => bcrypt.hash(password, saltRounds, (err, hash) => resolve(hash)));

        await signup({
            id,
            password: hashPassword,
            name,
            email
        });

        res.json(true);
    }

    static async signin(req, res) {
        const { password } = req.body;
        const response = await getMemberInfo(req.body.id);

        if (!response || response && !bcrypt.compareSync(password, response.password)) {
            res.status(400).send({ error: 'The ID or password does not match.' });
    
            return;
        }

        const { id, name, email, idx } = response;
        const token = signToken({ email, name, id, userIdx: idx });

        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json(true);
    }

    static logout(req, res) {
        res.cookie('token', '', { maxAge: 0 });
        res.json(true);
    }

    static getMemberInfo(req, res) {
        const { token } = req.cookies;

        res.json(decodeToken(token));
    }
}
