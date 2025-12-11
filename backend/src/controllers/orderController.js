const CartService = require("../services/CartService");
const OrderService = require("../services/OrderService");




class OrderController {

    async createOrder(req, res, next) {


        const { shippingAddress } = req.body;
        const { paymentMethod } = req.query;
        const jwt = req.headers.authorization;

        try {
            const user = await req.user;
            const cart = await CartService.findUserCart(user);
            const orders = await OrderService.createOrder(user, shippingAddress, cart);



            return res.status(200).json(orders);

        } catch (error) {
            console.log("error ", error)
            return res.status(500).json({ message: `Error creating order: ${error.message}` });
        }
    }



    async getOrderById(req, res, next) {
        try {
            const { orderId } = req.params;
            const order = await OrderService.findOrderById(orderId);
            return res.status(200).json(order);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }


    async getOrderItemById(req, res, next) {
        try {
            const { orderItemId } = req.params;
            const orderItem = await OrderService.findOrderItemById(orderItemId);
            return res.status(200).json(orderItem);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async getUserOrderHistory(req, res) {
       
        try {
            const userId = await req.user._id;
            const orderHistory = await OrderService.usersOrderHistory(userId);
            return res.status(200).json(orderHistory);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async getSellersOrders(req, res) {
        try {
            const sellerId = req.seller._id
            const orders = await OrderService.getShopsOrders(sellerId);
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }



    async updateOrderStatus(req, res) {
        try {
            const { orderId, orderStatus } = req.params;

            const updatedOrder = await OrderService.updateOrderStatus(
                orderId,
                orderStatus
            );
            return res
                .status(200)
                .json(updatedOrder);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }


    async cancelOrder(req, res, next) {
        try {
            const { orderId } = req.params;
            const userId = req.user._id;
            const canceledOrder = await OrderService.cancelOrder(orderId, userId);
            return res
                .status(200)
                .json({
                    message: "Order cancelled successfully",
                    order: canceledOrder,
                });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async deleteOrder(req, res, next) {
        try {
            const { orderId } = req.params;
            await OrderService.deleteOrder(orderId);
            return res.status(200).json({ message: "Order deleted successfully" });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }



}


module.exports = new OrderController();