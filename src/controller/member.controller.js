import jwt from 'jsonwebtoken';
import { SECRET_KEY, expiresIn, issuer, subject } from '../config/jwt-info.js';
import { MemberModel } from "../model/member.model.js";
import bcrypt from 'bcrypt';

const { getMemberInfo, signup, signin } = MemberModel;
const saltRounds = 10;

export class MemberController {
    constructor() {}

    static async signup(req, res) {
        const dupCheck = await getMemberInfo(req.body.id);

        if (dupCheck.length) {
            res.status(400).send({ error: '중복된 아이디 입니다.' });

            return;
        }

        const password = await new Promise(resolve => {
            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                resolve(hash);
            });
        });

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
            res.status(400).send({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' });
            
            return;
        }

        const { id, name, email, loginDate } = response;
        const token = jwt.sign({ email, name, id, loginDate }, SECRET_KEY, { expiresIn, issuer, subject });
    
        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json(true);
    }

    static async logout(req, res) {
        res.cookie('token', '', { maxAge: 0 });
        res.json(true);
    }

    static async getMemberInfo(req, res) {
        const { token } = req.cookies;
        const { email, name, id, loginDate } = jwt.decode(token);

        res.json({ email, name, id, loginDate });
    }
}
