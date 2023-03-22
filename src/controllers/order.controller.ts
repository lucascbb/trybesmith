import { Request, Response } from 'express';
import { validateToken } from '../utils/token.validate';
import { validateproduct } from '../utils/validate.product';
import orderService from '../services/order.service';

const getOrders = async (_req:Request, res:Response) => {
  const obj = await orderService.getOrder();
  return res.status(200).json(obj);
};

const createOrder = async (req:Request, res:Response) => {
  const token = req.headers.authorization;
  const { productsIds } = req.body;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  const a = JSON.parse(JSON.stringify(validateToken(token)));
  if (a === null) return res.status(401).json({ message: 'Invalid token' });

  const valiProduct = validateproduct(productsIds);
  if (valiProduct) return res.status(valiProduct.status).json({ message: valiProduct.message });

  const userId = a.data.userName.id;

  await orderService.createOrder(userId, productsIds);
  return res.status(201).json({ userId, productsIds });
};

const controllerOrder = { getOrders, createOrder };

export default controllerOrder;