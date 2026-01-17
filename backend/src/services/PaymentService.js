require("dotenv").config();
const razorpay = require("../config/razorpayClient");
const stripe = require("../config/stripeClient");
const OrderStatus = require("../domain/OrderStatus");
const PaymentOrderStatus = require("../domain/PaymentOrderStatus");
const PaymentStatus = require("../domain/PaymentStatus");
const Order = require("../models/Order");
const PaymentOrder = require("../models/PaymentOrder");

const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL;

class PaymentService {
  async createOrder(user, orders) {
    const amount = orders.reduce(
      (sum, order) => sum + order.totalSellingPrice,
      0,
    );

    const paymentOrder = new PaymentOrder({
      amount,
      user: user._id,
      orders: orders.map((order) => order._id),
    });

    return await paymentOrder.save();
  }

  async getPaymentOrderById(orderId) {
    const paymentOrder = await PaymentOrder.findById(orderId);
    if (!paymentOrder) {
      throw new Error("Payment order not found");
    }
    return paymentOrder;
  }

  async getPaymentOrderByPaymentId(paymentId) {
    const paymentOrder = await PaymentOrder.findOne({
      paymentLinkId: paymentId,
    });
    if (!paymentOrder) {
      throw new Error("Payment order not found with provided payment link id");
    }
    return paymentOrder;
  }

  async proceedPaymentOrder(paymentOrder, paymentId, paymentLinkId) {
    try {
      if (paymentOrder.status !== PaymentOrderStatus.PENDING) {
        return false;
      }

      const payment = await razorpay.payments.fetch(paymentId);

      if (
        payment.order_id !== paymentOrder.razorpayOrderId &&
        payment.payment_link_id !== paymentLinkId
      ) {
        throw new Error("Payment does not belong to this order");
      }

      if (payment.status === "captured") {
        await Promise.all(
          paymentOrder.orders.map(async (orderId) => {
            const order = await Order.findById(orderId);

            if (!order) {
              throw new Error(`Order not found: ${orderId}`);
            }

            order.paymentStatus = PaymentStatus.COMPLETED;
            order.orderStatus = OrderStatus.PLACED;
            await order.save();
          }),
        );

        paymentOrder.status = PaymentOrderStatus.SUCCESS;
        await paymentOrder.save();

        return true;
      }

      paymentOrder.status = PaymentOrderStatus.FAILED;
      await paymentOrder.save();
      return false;
    } catch (error) {
      console.error("Payment processing error:", error);

      paymentOrder.status = PaymentOrderStatus.FAILED;
      await paymentOrder.save();

      return false;
    }
  }

  async createRazorpayPaymentLink(user, amount, orderId) {
    try {
      const paymentLinkRequest = {
        amount: amount * 100,
        currency: "INR",
        customer: {
          name: user.fullName,
          email: user.email,
        },
        notify: {
          email: true,
        },
        callback_url: `${CLIENT_BASE_URL}/payment-success/${orderId}`,
        callback_method: "get",
      };

      const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);
      return paymentLink;
    } catch (err) {
      console.error("razorr pay errror ", err);
      throw new Error(err.message);
    }
  }

  async createStripePaymentLink(user, amount, orderId) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${CLIENT_BASE_URL}/payment-success/${orderId}`,
        cancel_url: "${CLIENT_BASE_URL}/payment-cancel",
        metadata: {
          orderId: orderId.toString(),
          userId: user._id.toString(),
        },
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: amount * 100,
              product_data: {
                name: "Deep MarketPlace",
              },
            },
            quantity: 1,
          },
        ],
      });

      return session.url;
    } catch (err) {
      console.error("Stripe error:", err);
      throw new Error(err.message);
    }
  }
}

module.exports = new PaymentService();
