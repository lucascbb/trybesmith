import { ResultSetHeader } from 'mysql2';
import { IUser, IToken, IUserId } from '../interfaces';
import connection from './connection';
import { newToken } from '../utils/token.validate';

export const createUser = async (user: IUser): Promise<IToken> => {
  const { username, vocation, level, password } = user;

  const sql2 = 'SELECT id FROM Trybesmith.users order by id desc limit 1';
  
  const [rows] = await connection.execute(sql2);
  const [id] = rows as IUserId[];

  const sql = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)';
  await connection.execute<ResultSetHeader>(sql, [username, vocation, level, password]);

  const token = newToken(id);

  const newUser: IToken = { token };
  return newUser;
};

const a = { username: 'username', vocation: 'vocation', level: 99, password: 'senha' };
createUser(a).then((ele) => console.log(ele));

// Fake
export const createUs2 = async () => {
  const ab = 1234;
  return ab;
};