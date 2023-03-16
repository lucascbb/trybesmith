import { ResultSetHeader } from 'mysql2';
import { IProduct, IProductCreated } from '../interfaces';
import connection from './connection';

export const getAllProducts = async (): Promise<IProduct []> => {
  const sql = 'SELECT * FROM Trybesmith.products';
  const [rows] = await connection.execute(sql);

  return rows as IProduct[];
};

export const createProduct = async (name:string, amount:string): Promise<IProductCreated> => {
  // const sql2 = 'SELECT order_id FROM Trybesmith.products order by order_id DESC LIMIT 1';
  // const [result1] = await connection.execute(sql2);
  // console.log(camelize(result1));
  
  const sql = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
  const { insertId: id } = result;

  const newProduct: IProductCreated = { id, name, amount };
  return newProduct;
};

// createProduct('name', 'amount').then((ele) => console.log(ele));