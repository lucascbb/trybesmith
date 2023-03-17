import { Request, Response } from 'express';

import orderService from '../services/order.service';

const getOrders = async (_req:Request, res:Response) => {
  const obj = await orderService.getOrders();
  return res.status(200).json(obj);
};

const controllerOrder = { getOrders };

export default controllerOrder;