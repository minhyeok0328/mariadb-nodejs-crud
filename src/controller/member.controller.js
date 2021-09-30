import bcrypt from 'bcrypt';
import { MemberModel } from "../model/member.model.js";
import { signToken, decodeToken } from '../utils/jwt.js';

const saltRounds = 10;
const { getMemberInfo, signup } = MemberModel;

export class MemberController {
    constructor() {}

    static async signup(req, res) {
        const dupCheck = await getMemberInfo(req.body.id);

        if (dupCheck) {
            res.status(400).send({ error: 'These are duplicated IDs.' });

            return;
        }

        const password = await new Promise(resolve => bcrypt.hash(req.body.password, saltRounds, (err, hash) => resolve(hash)));

        await signup({
            ...req.body,
            password
        });

        res.json(true);
    }

    static async signin(req, res) {
        const { password } = req.body;
        const response = await getMemberInfo(req.body.id);

        if (!response || response && !await bcrypt.compareSync(password, response.password)) {
            res.status(400).send({ error: 'The ID or password does not match.' });

            return;
        }

        const { id, name, email, loginDate, idx } = response;
        const token = signToken({ email, name, id, loginDate, idx });

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
