const express = require('express');
const router = express.Router();
const sellerAuthMiddleware = require('../middlewares/sellerAuthMiddleware');
const sellerReportController = require('../controllers/sellerReportController');



router.get('/',sellerAuthMiddleware, sellerReportController.getSellerReport);


module.exports = router;
