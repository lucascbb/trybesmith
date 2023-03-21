import { Request, Response } from 'express';
import userService from '../services/user.service';
import { validateUsername } from '../utils/validate.username';

const createUser = async (req:Request, res:Response) => {
  const user = req.body;
  const { username, vocation, level, password } = req.body;

  const valiUser = validateUsername(username);
  if (valiUser) return res.status(valiUser.status).json({ message: valiUser.message });

  const token = await userService.createUser(user);
  return res.status(201).json(token);
};

const controllerUser = { createUser };

export default controllerUser;