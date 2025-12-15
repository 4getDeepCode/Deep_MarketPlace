
const express = require('express');
const couponController = require('../controllers/couponController');
const router = express.Router();


router.post('/apply', couponController.applyCoupon);
router.post('/admin/create', couponController.createCoupon);
router.delete('/admin/delete/:id', couponController.deleteCoupon);
router.get('/admin/all', couponController.getAllCoupons);

module.exports = router;
