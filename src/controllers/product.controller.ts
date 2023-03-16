import { Request, Response } from 'express';

import * as productService from '../services/product.service';

export const getAllProducts = async (_req:Request, res:Response) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

export const createProduct = async (req:Request, res:Response) => {
  const { name, amount } = req.body;

  const productCreated = await productService.createProduct(name, amount);
  return res.status(201).json(productCreated);
};