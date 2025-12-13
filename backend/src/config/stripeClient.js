const Stripe = require("stripe");
require("dotenv").config();

const apiKey = process.env.STRIPE_SECRET_KEY
const publishableKey = process.env.PUBLISHABLE_KEY

const stripe = new Stripe({
    key_id: apiKey,
    publishable_key: publishableKey

});

module.exports = stripe;
