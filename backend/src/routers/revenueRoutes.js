const express = require('express');
const sellerAuthMiddleware = require('../middlewares/sellerAuthMiddleware');
const revenueController = require('../controllers/revenueController');

const router = express.Router();

router.get('/chart', sellerAuthMiddleware, revenueController.getRevenueChart);

module.exports = router;
