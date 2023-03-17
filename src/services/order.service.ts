import orderModel from '../models/order.model';

const getOrder = async () => {
  const allOrders = await orderModel.getOrders();
  return allOrders;
};

const orderService = { getOrder };

export default orderService;