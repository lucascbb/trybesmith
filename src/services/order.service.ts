import orderModel from '../models/order.model';

const getOrder = async () => {
  const allOrders = await orderModel.getOrders();
  return allOrders;
};

const createOrder = async (userId: number, productsIds:[]) => {
  await orderModel.createOrder(userId, productsIds);
};

const orderService = { getOrder, createOrder };

export default orderService;