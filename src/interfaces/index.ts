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