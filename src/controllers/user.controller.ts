import { Request, Response } from 'express';

import userService from '../services/user.service';

const createUser = async (req:Request, res:Response) => {
  const user = req.body;

  const token = await userService.createUser(user);
  return res.status(201).json(token);
};

const controllerUser = { createUser };

export default controllerUser;