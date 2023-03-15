import { ResultSetHeader } from 'mysql2';

import connection from './connection';

const insertProduct = async (name: string, amount:string) => {
  const sql = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
  const { insertId: id } = result;

  const newProduct = { id, name, amount };
  return newProduct;
};

insertProduct('lucas', 'oi').then((ele) => console.log(ele));

const userModel = { insertProduct };

export default userModel;
