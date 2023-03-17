import jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig:object = { expiresIn: '7d', algorithm: 'HS256' };

export const newToken = (username:object) => jwt.sign({ 
  data: { userName: username } }, secret, jwtConfig);

export const validateToken = (token:string) => jwt.verify(token, secret);
