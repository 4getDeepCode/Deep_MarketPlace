const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/userAuthMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, userController.getUserProfileByJwt);

module.exports = router;
