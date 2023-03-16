import { ResultSetHeader } from 'mysql2';
import { IUser, IToken } from '../interfaces';
import connection from './connection';

export const createUser = async (user: IUser): Promise<IToken> => {
  const { username, vocation, level, password } = user;

  const sql = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)';
  await connection.execute<ResultSetHeader>(sql, [username, vocation, level, password]);

  const token = 'fdfsfsdfsd.fsfsdfds.sdfsd45';

  const newUser: IToken = { token };
  return newUser;
};

const a = { username: 'username', vocation: 'vocation', level: 99, password: 'senha' };

createUser(a).then((ele) => console.log(ele));
