export interface IProduct {
  id:number; 
  name:string; 
  amount:string; 
  orderId: number;
}

export interface IProductCreated {
  id:number;
  name:string;
  amount:string;
}

export interface IUser{
  username:string;
  vocation:string;
  level:number;
  password: string;
}

export interface IToken{
  token:string;
}

export interface IExpires{
  expiresIn:string;
  algorithm: string;
}

export interface IUserId {
  id:number; 
}

export interface IOrder{
  id:number;
  userId:number;
  productsIds:number | string;
}

export interface ILogin{
  id:number;
  username:string;
  vocation:string;
  level: number;
  password:string;
}