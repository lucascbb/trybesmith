import { Request, Response } from 'express';

import * as userService from '../services/user.service';

export const createUser = async (req:Request, res:Response) => {
  const user = req.body;

  const token = await userService.createUser(user);
  return res.status(201).json(token);
};

export const gfdgdfgfdgd = async (_req:Request, res:Response) => {
  const productCreated = await userService.createUser2();
  return res.status(201).json(productCreated);
};