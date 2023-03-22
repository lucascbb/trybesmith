// import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

const getOrders = async (): Promise<IOrder []> => {
  const sql = `SELECT 
  orders.id,
  orders.user_id AS userId,
  JSON_ARRAYAGG(products.id) AS productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON Trybesmith.orders.id = Trybesmith.products.order_id
  GROUP BY products.order_id`;

  const [rows] = await connection.execute(sql);
  return rows as IOrder[];
};

const createOrder = async (userId: number, productsIds:number[]) => {
  const sql = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const p = await connection.execute(sql, [userId]);
  const lastId = JSON.parse(JSON.stringify(p[0])).insertId;
    
  const promises = [];

  for (let i = 0; i < productsIds.length; i += 1) {
    const sql3 = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const promise = connection.execute(sql3, [lastId, productsIds[i]]);
    promises.push(promise);
  }

  await Promise.all(promises);
};

const orderModel = { getOrders, createOrder };
export default orderModel;