import { Request, Response } from 'express';
import loginService from '../services/login.service';

const getLogin = async (req:Request, res:Response) => {
  const { username, password } = req.body;
  if (!username) { return res.status(400).json({ message: '"username" is required' }); }
  if (!password) { return res.status(400).json({ message: '"password" is required' }); }

  const token = await loginService.getLogin(username, password);
  if (!token) { return res.status(401).json({ message: 'Username or password invalid' }); }
  return res.status(200).json({ token });
};

const controllerLogin = { getLogin };

export default controllerLogin;
