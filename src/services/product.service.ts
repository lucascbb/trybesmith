import { IProduct, IProductCreated } from '../interfaces';
import * as productModel from '../models/product.model';

export const getAllProducts = async (): Promise<IProduct []> => {
  const products = await productModel.getAllProducts();
  return products;
};

export const createProduct = async (name:string, amount:string): Promise<IProductCreated> => {
  const de = await productModel.createProduct(name, amount);
  return de as IProductCreated;
};
