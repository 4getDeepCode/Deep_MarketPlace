const express = require("express");
const sellerAuthMiddleware = require("../middlewares/sellerAuthMiddleware");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", sellerAuthMiddleware, productController.getProductBySellerId);

router.post("/", sellerAuthMiddleware, productController.createProduct);

router.delete("/:productId", sellerAuthMiddleware, productController.deleteProduct);

router.patch("/:productId", sellerAuthMiddleware, productController.updateProduct);

module.exports = router;
