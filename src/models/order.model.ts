import { IOrder } from '../interfaces';
import connection from './connection';

export const getOrders = async (): Promise<IOrder []> => {
  const sql = `SELECT 
  Trybesmith.orders.id,
  Trybesmith.orders.user_id AS userId,
  JSON_ARRAYAGG(Trybesmith.products.id) AS productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON Trybesmith.orders.id = Trybesmith.products.order_id
  GROUP BY Trybesmith.products.order_id`;

  const [rows] = await connection.execute(sql);

  return rows as IOrder[];
};

const orderModel = { getOrders };
export default orderModel;

getOrders().then((ele) => console.log(ele));
