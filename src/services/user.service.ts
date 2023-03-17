import { IUser } from '../interfaces';
import * as userModel from '../models/user.model';

export const createUser = async (user:IUser) => {
  const userCreated = await userModel.createUser(user);
  return userCreated;
};

export const createUser2 = async () => {
  const products = 'aaa';
  console.log(products);
};
