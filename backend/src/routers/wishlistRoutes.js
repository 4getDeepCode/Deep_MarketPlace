const express = require("express");
const authMiddleware = require("../middlewares/userAuthMiddleware");
const wishlistController = require("../controllers/wishlistController");
const router = express.Router();



router.get("/", authMiddleware, wishlistController.getWishlistByUserId);
router.post("/add-product/:productId", authMiddleware,wishlistController.addProductToWishlist);

module.exports = router;
