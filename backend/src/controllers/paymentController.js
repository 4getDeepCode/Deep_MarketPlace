
const Cart = require("../models/Cart");
const OrderService = require("../services/OrderService");
const PaymentService = require("../services/PaymentService");
const SellerReportService = require("../services/SellerReportService");
const SellerService = require("../services/SellerService");
const TransactionService = require("../services/TransactionService");

const paymentSuccessHandler = async (req, res) => {
  const { paymentId } = req.params;
  const { paymentLinkId } = req.query;

  try {
   
    const user = await req.user;

    const paymentOrder = await PaymentService.getPaymentOrderByPaymentId(
      paymentLinkId
    );

    const paymentSuccess = await PaymentService.proceedPaymentOrder(
      paymentOrder,
      paymentId,
      paymentLinkId
    );

    if (paymentSuccess) {
      for (let orderId of paymentOrder.orders) {
        const order = await OrderService.findOrderById(orderId);

        await TransactionService.createTransaction(order);
        const seller = await SellerService.getSellerById(order.seller);
        const sellerReport = await SellerReportService.getSellerReport(seller);

   
        sellerReport.totalOrders += 1;
        sellerReport.totalEarnings += order.totalSellingPrice;
        sellerReport.totalSales += order.orderItems.length;

        const updatedReport = await SellerReportService.updateSellerReport(sellerReport);
        console.log("updated report: " + updatedReport)
      }
  
      await Cart.findOneAndUpdate(
        { user: user._id },
        { cartItems: [] },
        { new: true }
      );

      return res.status(201).json({
        message: "Payment successful",
      });
    } else {
      return res.status(400).json({
        message: "Payment failed",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  paymentSuccessHandler,
};
