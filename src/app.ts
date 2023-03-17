import express from 'express';
import userRoutes from './routers/user.routes';
import productRoutes from './routers/product.routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use('/products', productRoutes);

export default app;
