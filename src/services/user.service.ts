import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const createUser = async (user:IUser) => {
  const userCreated = await userModel.createUser(user);
  return userCreated;
};

const userService = { createUser };

export default userService;
