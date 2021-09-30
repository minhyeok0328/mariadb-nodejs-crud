import { BoardModel } from "../model/board.model.js";
import { signToken, decodeToken } from '../utils/jwt.js';

const { getBoardList, write } = BoardModel;

export class BoardController {
    constructor() {}

    static async getBoardList(req, res) {
        const { search, category } = req.query;
        const response = await getBoardList({ search, category });

        res.json(response);
    }

    static async boardWrite(req, res) {
        const { token } = req.cookies;

        const { idx, name, email, loginDate, id } = decodeToken(token);
        const { subject, content, categoryIdx } = req.body;
        const params = {
            writer: name,
            userIdx: idx,
            subject,
            content,
            categoryIdx
        };
        const { insertId } = await write(params);
        const resetToken = signToken({ id, name, email, loginDate, idx });

        res.cookie('token', resetToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({ insertId, categoryIdx });
    }
}
