const Transaction = require('../models/Transaction');
const Seller = require('../models/Seller');
const Order = require('../models/Order');

class TransactionService {

    async createTransaction(orderId) {

        const order = await Order.findById(orderId).populate('seller');
        if (!order) {
            throw new Error('Order not found');
        }

        const seller = await Seller.findById(order.seller._id);
        if (!seller) {
            throw new Error('Seller not found');
        }


        const transaction = new Transaction({
            seller: seller._id,
            customer: order.user,
            order: order._id,
        });


        return await transaction.save();
    }


    async getTransactionsBySellerId(sellerId) {
        return await Transaction.find({ seller: sellerId }).populate('order customer');
    }

    async getAllTransactions() {
        return await Transaction.find().populate('seller order customer');
    }
}

module.exports = new TransactionService();
