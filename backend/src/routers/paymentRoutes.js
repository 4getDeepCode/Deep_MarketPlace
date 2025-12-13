
const express = require('express');
const authMiddleware = require('../middlewares/userAuthMiddleware');
const router = express.Router();
const paymentController = require('../controllers/paymentController');



router.get('/:paymentId',authMiddleware, paymentController.paymentSuccessHandler);

module.exports = router;
