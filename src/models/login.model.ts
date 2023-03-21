import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { newToken } from '../utils/token.validate';

const getLogin = async (username:string, password:string): Promise<string | null> => {
  const sql = 'SELECT id, username FROM Trybesmith.users WHERE username = (?) AND password = (?)';
  const result = await connection.execute<ResultSetHeader>(sql, [username, password]);
  const user = JSON.parse(JSON.stringify(result[0])); 
  
  if (user.length === 0) { return null; }
  
  const userToken = {
    id: user[0].id,
    username: user[0].username,
  };
  
  const token = newToken(userToken);

  return token;
};

const loginModel = { getLogin };

export default loginModel;

getLogin('reigal', '1dragaonoceu').then((ele) => console.log(ele));