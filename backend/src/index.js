require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware (optional, for JSON parsing)
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
    res.send({ message: "Hello All! Welcome To Deep Marketplace From Backend System 👋" });
});

const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    await connectDB();
});
