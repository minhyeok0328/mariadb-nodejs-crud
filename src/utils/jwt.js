import jwt from 'jsonwebtoken';
import { SECRET_KEY, expiresIn, issuer, subject } from '../config/jwt-info.js';

export const signToken = (params) => {
    return jwt.sign(params, SECRET_KEY, { expiresIn, issuer, subject });
}

export const decodeToken = (token) => {
    return jwt.decode(token);
}

export const tokenOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000
};
