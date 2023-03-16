import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const createUser = async (user:[]) => {
  const { username, vocation, level, password } = user;

  const sql = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(sql, 
    [username, vocation, level, password]
  );
  const { insertId: id } = result;

  const newProduct: IProductCreated = { id, name, amount };
  return newProduct;
};
