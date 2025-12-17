const express = require("express");
const authMiddleware = require("../middlewares/userAuthMiddleware");
const reviewController = require("../controllers/reviewController");
const router = express.Router();

router.post("/product/:productId", authMiddleware, reviewController.createReview);
router.get("/product/:productId", reviewController.getReviewsByProductId);
router.put("/:reviewId", authMiddleware, reviewController.updateReview);
router.delete("/:reviewId", authMiddleware, reviewController.deleteReview);

module.exports = router;

