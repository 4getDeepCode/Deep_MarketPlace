const Razorpay = require('razorpay');
require("dotenv").config();

const apiKey = process.env.RAZOR_PAY_API_KEY
const apiSecret = process.env.RAZOR_PAY_SECRET_KEY


const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});


module.exports = razorpay;