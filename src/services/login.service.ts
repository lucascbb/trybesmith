import loginModel from '../models/login.model';

const getLogin = async (username:string, password:string) => {
  const login = await loginModel.getLogin(username, password);
  return login;
};

const loginService = { getLogin };

export default loginService;
