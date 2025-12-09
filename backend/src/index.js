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




app.use('/auth', authRoutes);
app.use("/sellers", sellerRoutes)
app.use("/admin", adminRoutes)
app.use("/api/users",userRoutes)
app.use("/products", productRoutes)
app.use("/api/sellers/products", sellerProductRoutes)
app.use("/api/cart",cartRoutes)





const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    await connectDB();
});
