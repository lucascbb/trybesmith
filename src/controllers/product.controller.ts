import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export const getAllProducts = async (_req:Request, res:Response) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

export const createProduct = async (req:Request, res:Response) => {
  const { name, amount } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (name.length > 2) {
    return res.status(422).json({ 
      message: '"name" length must be at least 3 characters long' });
  }
  
  const productCreated = await productService.createProduct(name, amount);
  return res.status(201).json(productCreated);
};