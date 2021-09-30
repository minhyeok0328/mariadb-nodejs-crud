import jwt from 'jsonwebtoken';
import { SECRET_KEY, expiresIn, issuer, subject } from '../config/jwt-info.js';

export const signToken = (params) => {
    return jwt.sign(params, SECRET_KEY, { expiresIn, issuer, subject });
}

export const decodeToken = (token) => {
    return jwt.decode(token);
}