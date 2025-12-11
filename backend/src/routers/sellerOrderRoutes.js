const express = require('express');
const orderController = require('../controllers/orderController');
const sellerAuthMiddleware = require('../middlewares/sellerAuthMiddleware');
const router = express.Router();



router.get('/', sellerAuthMiddleware, orderController.getSellersOrders);
router.patch('/:orderId/status/:orderStatus',sellerAuthMiddleware,orderController.updateOrderStatus);
router.delete('/:orderId', sellerAuthMiddleware, orderController.deleteOrder);
module.exports = router;
