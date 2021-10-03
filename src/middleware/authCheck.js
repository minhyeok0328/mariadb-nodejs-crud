import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/jwt-info.js';

const exceptionURL = [
    '/api/v1/board/write',
    '/api/v1/board/update',
    '/api/v1/board/delete'
];
const errorResponse = { error: `You don't have permission.` };
const checkExceptionURL = (url) => exceptionURL.findIndex(v => url.indexOf(v) !== -1) !== -1;

export const authCheck = (req, res, next) => {
    const { token } = req.cookies;
    const { originalUrl } = req;

    if (!token && checkExceptionURL(originalUrl)) {
        res.status(401).json(errorResponse);
        
        return;
    }

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) {
            if (checkExceptionURL(originalUrl)) {
                res.status(401).json(errorResponse);

                return;
            }

            next();
        } else {
            next();
        }
    });
}