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

const orderModel = { getOrders };
export default orderModel;

// getOrders().then((ele) => console.log(ele));
