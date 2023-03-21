import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import { validate } from '../utils/validate.name';
import { validate2 } from '../utils/validate.amount';

export const getAllProducts = async (_req:Request, res:Response) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

export const createProduct = async (req:Request, res:Response) => {
  const { name, amount } = req.body;
  const valiName = validate(name);
  const valiamount = validate2(amount);
  
  if (valiName) return res.status(valiName.status).json({ message: valiName.message });
  if (valiamount) return res.status(valiamount.status).json({ message: valiamount.message });
  console.log(valiName);
  
  // if (!amount) return res.status(400).json({ message: '"amount" is required' });
  
  const productCreated = await productService.createProduct(name, amount);
  return res.status(201).json(productCreated);
};