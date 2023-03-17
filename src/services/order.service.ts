// import { IOrder } from '../interfaces';
import orderModel from '../models/order.model';

const getOrders = async () => {
  const allOrders = await orderModel.getOrders();
  return allOrders;
};

const userService = { getOrders };

export default userService;