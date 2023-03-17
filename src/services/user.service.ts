import { IUser } from '../interfaces';
import * as userModel from '../models/user.model';

export const createUser = async (user:IUser) => {
  const products = await userModel.createUser(user);
  return products;
};

export const createUser2 = async () => {
  const products = 'aaa';
  return products;
};
