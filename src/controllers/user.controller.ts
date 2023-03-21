import { Request, Response } from 'express';
import userService from '../services/user.service';
import { validateUsername } from '../utils/validate.username';
import { validateVocation } from '../utils/validate.vocation';
import { validateLevel } from '../utils/validate.level';
import { validatePassword } from '../utils/valdiate.password';

const createUser = async (req:Request, res:Response) => {
  const user = req.body;
  const { username, vocation, level, password } = req.body;

  console.log(typeof level);

  const valiUser = validateUsername(username);
  if (valiUser) return res.status(valiUser.status).json({ message: valiUser.message });

  const valiVocation = validateVocation(vocation);
  if (valiVocation) return res.status(valiVocation.status).json({ message: valiVocation.message });

  const valiLevel = validateLevel(level);
  if (valiLevel) return res.status(valiLevel.status).json({ message: valiLevel.message });

  const valiPassowrd = validatePassword(password);
  if (valiPassowrd) return res.status(valiPassowrd.status).json({ message: valiPassowrd.message });

  const token = await userService.createUser(user);
  return res.status(201).json(token);
};

const controllerUser = { createUser };

export default controllerUser;