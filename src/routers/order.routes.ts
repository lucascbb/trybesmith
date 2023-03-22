import { Router } from 'express';
import orderController from '../controllers/order.controller';

const router = Router();

router.get('/', orderController.getOrders);

router.post('/', orderController.createOrder);

export default router;