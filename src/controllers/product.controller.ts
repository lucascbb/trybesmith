import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import { validateName } from '../utils/validate.name';
import { validateAmount } from '../utils/validate.amount';

export const getAllProducts = async (_req:Request, res:Response) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

export const createProduct = async (req:Request, res:Response) => {
  const { name, amount } = req.body;
  const valiName = validateName(name);
  const valiamount = validateAmount(amount);
  
  if (valiName) return res.status(valiName.status).json({ message: valiName.message });
  if (valiamount) return res.status(valiamount.status).json({ message: valiamount.message });

  const productCreated = await productService.createProduct(name, amount);
  return res.status(201).json(productCreated);
};