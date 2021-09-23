import jwt from 'jsonwebtoken';

export const authCheck = (req, res, next) => {
    console.log(req.cookies);
    console.log('test');
    next();
}