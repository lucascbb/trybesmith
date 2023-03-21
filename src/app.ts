import express from 'express';
import userRoutes from './routers/user.routes';
import productRoutes from './routers/product.routes';
import orderRoutes from './routers/order.routes';
import loginRoutes from './routers/login.routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.use('/login', loginRoutes);

export default app;
