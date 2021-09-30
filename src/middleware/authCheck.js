import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/jwt-info.js';
// exception url
const exceptionURL = [
    '/api/v1/board/write'
];

export const authCheck = (req, res, next) => {
    const { token } = req.cookies;
    const { originalUrl } = req;
    console.log(originalUrl);

    if (!token && exceptionURL.indexOf(originalUrl) !== -1) {
        res.status(401).json({ error: `You don't have permission.` });

        return;
    }

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) {
            if (exceptionURL.indexOf(originalUrl) !== -1) {
                res.status(401).json({ error: `You don't have permission.` });
                
                return;
            }

            next();
        } else {
            next();
        }
    });
}