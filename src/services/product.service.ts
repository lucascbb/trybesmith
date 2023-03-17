import { IProduct, IProductCreated } from '../interfaces';
import * as productModel from '../models/product.model';

export const getAllProducts = async (): Promise<IProduct []> => {
  const products = await productModel.getAllProducts();
  return products;
};

export const createProduct = async (name:string, amount:string): Promise<IProductCreated> => {
  const productCreated = await productModel.createProduct(name, amount);
  return productCreated as IProductCreated;
};
