require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    res.send({ message: "Hello All! Welcome To Deep Marketplace From Backend System 👋" });
});

app.use(bodyParser.json());


const adminRoutes = require("./routers/adminRoutes")
const sellerRoutes = require("./routers/sellerRoutes")
const authRoutes = require("./routers/authRoutes")
const userRoutes = require("./routers/userRoutes")
const sellerProductRoutes = require("./routers/sellerProductRoutes")
const productRoutes = require("./routers/productRoutes")
const cartRoutes = require("./routers/cartRoutes")
const orderRoutes = require("./routers/orderRoutes")
const sellerOrderRoutes = require("./routers/sellerOrderRoutes")
const paymentRoutes = require("./routers/paymentRoutes")
const transactionRoutes = require("./routers/transactionRoutes")
const sellerReports = require("./routers/sellerReportRoutes")
const dealRoutes = require("./routers/dealRoutes")
const homeRoutes = require("./routers/homeCategoryRoutes")
const couponRoutes = require("./routers/couponRoutes")
const reviewRoutes = require("./routers/reviewRoutes")
const wishlistRoutes=require("./routers/wishlistRoutes")
const revenueRoutes=require("./routers/revenueRoutes")



app.use("/auth", authRoutes);
app.use("/sellers", sellerRoutes)
app.use("/admin", adminRoutes)
app.use("/api/users", userRoutes)
app.use("/products", productRoutes)
app.use("/api/sellers/products", sellerProductRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/seller/orders", sellerOrderRoutes)

app.use("/api/payment", paymentRoutes)
app.use("/api/transactions", transactionRoutes)
app.use("/api/sellers/report", sellerReports)

app.use("/admin/deals", dealRoutes)
app.use("/home", homeRoutes)
app.use("/api/coupons", couponRoutes)
app.use("/api/reviews", reviewRoutes)
app.use("/api/wishlist", wishlistRoutes)
app.use("/api/sellers/revenue",revenueRoutes)




const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    await connectDB();
});
