import { Request, Response } from 'express';
import { validateToken } from '../utils/token.validate';
import { validateproduct } from '../utils/validate.product';
import orderService from '../services/order.service';

const getOrders = async (_req:Request, res:Response) => {
  const obj = await orderService.getOrder();
  return res.status(200).json(obj);
};

const createOrder = async (req:Request, res:Response) => {
  const { authorization } = req.headers;
  const { productsIds } = req.body;
  
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
  const resultToken = JSON.parse(JSON.stringify(validateToken(authorization)));
  if (resultToken === 'token invalido') return res.status(401).json({ message: 'Invalid token' });

  const valiProduct = validateproduct(productsIds);
  if (valiProduct) return res.status(valiProduct.status).json({ message: valiProduct.message });

  const userId = resultToken.data.userName.id;

  await orderService.createOrder(userId, productsIds);
  return res.status(201).json({ userId, productsIds });
};

const controllerOrder = { getOrders, createOrder };
export default controllerOrder;