import { ResultSetHeader } from 'mysql2';
import { IUser, IToken, IUserId } from '../interfaces';
import connection from './connection';
import { newToken } from '../utils/token.validate';

const createUser = async (user: IUser): Promise<IToken> => {
  const { username, vocation, level, password } = user;

  const sql2 = 'SELECT id, username FROM Trybesmith.users order by id desc limit 1';
  
  const [rows] = await connection.execute(sql2);
  const [id] = rows as IUserId[];

  const sql = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)';
  await connection.execute<ResultSetHeader>(sql, [username, vocation, level, password]);

  const token = newToken(id);

  const newUser: IToken = { token };
  return newUser;
};

const userModel = { createUser };

export default userModel;

// const a = { username: 'lucas', vocation: 'professor', level: 99, password: '123456' };
// createUser(a).then((ele) => console.log(ele));