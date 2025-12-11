const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/userAuthMiddleware');
const router = express.Router();



router.post('/', authMiddleware, orderController.createOrder);
router.get('/user', authMiddleware, orderController.getUserOrderHistory);
router.put('/:orderId/cancel', authMiddleware, orderController.cancelOrder);
router.get('/:orderId', authMiddleware, orderController.getOrderById);
router.get('/item/:orderItemId', authMiddleware, orderController.getOrderItemById);
router.delete('/:orderId', authMiddleware, orderController.deleteOrder);

module.exports = router;

