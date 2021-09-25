import jwt from 'jsonwebtoken';
import { SECRET_KEY, expiresIn, issuer, subject } from '../config/jwt-info.js';
// 인증 예외 api
const exceptionURL = [
    '/api/v1/member/logout',
    '/api/v1/member/signin',
    '/api/v1/member/signup',
];

export const authCheck = (req, res, next) => {
    const { token } = req.cookies;
    const { originalUrl } = req;
    console.log(originalUrl);

    if (!token) {
        next();

        return;
    }

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) {
 
            if (exceptionURL.indexOf(originalUrl) !== -1) {
                next();

                return;
            }

            res.status(401).json({ error: '권한이 없습니다.' });
        } else {
            next();
        }
    });
}