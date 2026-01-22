const cors = require("cors");
require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello All! Welcome To Deep Marketplace From Backend System 👋",
  });
});

const adminRoutes = require("./src/routers/adminRoutes");
const sellerRoutes = require("./src/routers/sellerRoutes");
const authRoutes = require("./src/routers/authRoutes");
const userRoutes = require("./src/routers/userRoutes");
const sellerProductRoutes = require("./src/routers/sellerProductRoutes");
const productRoutes = require("./src/routers/productRoutes");
const cartRoutes = require("./src/routers/cartRoutes");
const orderRoutes = require("./src/routers/orderRoutes");
const sellerOrderRoutes = require("./src/routers/sellerOrderRoutes");
const paymentRoutes = require("./src/routers/paymentRoutes");
const transactionRoutes = require("./src/routers/transactionRoutes");
const sellerReports = require("./src/routers/sellerReportRoutes");
const dealRoutes = require("./src/routers/dealRoutes");
const homeRoutes = require("./src/routers/homeCategoryRoutes");
const couponRoutes = require("./src/routers/couponRoutes");
const reviewRoutes = require("./src/routers/reviewRoutes");
const wishlistRoutes = require("./src/routers/wishlistRoutes");
const revenueRoutes = require("./src/routers/revenueRoutes");
const chatbotRouters = require("./src/routers/chatbotRoutes");

app.use("/auth", authRoutes);
app.use("/sellers", sellerRoutes);
app.use("/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/products", productRoutes);
app.use("/api/sellers/products", sellerProductRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/seller/orders", sellerOrderRoutes);

app.use("/api/payment", paymentRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/sellers/report", sellerReports);

app.use("/admin/deals", dealRoutes);
app.use("/home", homeRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/sellers/revenue", revenueRoutes);
app.use("/chat", chatbotRouters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
