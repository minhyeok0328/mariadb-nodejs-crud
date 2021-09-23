import jwt from 'jsonwebtoken';
import { SECRET_KEY, expiresIn, issuer, subject } from '../config/jwt-info.js';
import { MemberModel } from "../model/member.model.js";

const { checkDuplicatedId, register } = MemberModel;

export class MemberController {
    constructor() {}

    static async register(req, res) {
        const dupCheck = await checkDuplicatedId(req.body.id);

        if (dupCheck.length) {
            res.status(400).send({ error: '중복된 아이디 입니다.' });

            return;
        }

        const { email, name, id } = await register(req.body);
        const token = jwt.sign({ email, name, id }, SECRET_KEY,
        {
            expiresIn,
            issuer,
            subject
        });

        res.cookie('user', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json(true);
    }

    static async checkDuplicatedId(req, res) {
        const { id } = req.params;
        const response = await checkDuplicatedId(id);

        res.json(response.length ? false : true);
    }

    static test(req, res) {
        console.log('test!!');

        res.status(500).send({ error: 'Something failed!' });
    }
}
