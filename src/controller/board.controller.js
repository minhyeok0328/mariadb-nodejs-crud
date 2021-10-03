import { BoardModel } from "../model/board.model.js";
import { signToken, decodeToken } from '../utils/jwt.js';

const { boardList, boardView, boardWrite, boardUpdate, boardDelete } = BoardModel;

export class BoardController {
    constructor() {}

    static async boardList(req, res) {
        const { search } = req.query;
        const response = await boardList({ search });

        res.json(response);
    }

    static async boardView(req, res) {
        const { idx } = req.params;
        const response = await boardView({ idx });

        res.json(response);
    }

    static async boardWrite(req, res) {
        const { token } = req.cookies;

        const { userIdx, name, email, id } = decodeToken(token);
        const { subject, content } = req.body;
        const { insertId } = await boardWrite({
            writer: name,
            userIdx,
            subject,
            content
        });
        const resetToken = signToken({ id, name, email, userIdx });

        res.cookie('token', resetToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({ insertId });
    }

    static async boardUpdate(req, res) {
        const { token } = req.cookies;
        const { userIdx, name, email, id } = decodeToken(token);
        const { subject, content, idx } = req.body;
        const boardInfo = await boardView({ idx });

        if (!boardInfo || boardInfo && boardInfo.userIdx !== userIdx) {
            res.status(400).send({ error: 'Incorrect information.' });

            return;
        }

        await boardUpdate({
            subject,
            content,
            idx
        });

        const resetToken = signToken({ id, name, email, userIdx });

        res.cookie('token', resetToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json(true);
    }

    static async boardDelete(req, res) {
        const { token } = req.cookies;
        const { userIdx } = decodeToken(token);
        const { idx } = req.params;
        const boardInfo = await boardView({ idx });

        if (!boardInfo || boardInfo && boardInfo.userIdx !== userIdx) {
            res.status(400).send({ error: 'Incorrect information.' });

            return;
        }

        await boardDelete({ idx });

        res.json(response);
    }
}
