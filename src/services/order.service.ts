import orderModel from '../models/order.model';

const getOrders = async () => {
  const allOrders = await orderModel.getOrders();
  return allOrders;
};

const orderService = { getOrders };

export default orderService;