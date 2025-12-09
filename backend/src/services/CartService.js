const Cart = require("../models/Cart");
const CartItem = require("../models/CartItem");



class CartService {

    async findUserCart(user) {

        let cart = await Cart.findOne({ user: user._id }).populate({
            path: "cartItems",
            populate: { path: "product" },
        });

        if (!cart) {

            const newCart = new Cart({ user: user._id, cartItems: [] });
            cart = await newCart.save();
        }

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        cart.cartItems.forEach((cartsItem) => {
            totalPrice += cartsItem.mrpPrice;
            totalDiscountedPrice += cartsItem.sellingPrice;
            totalItem += cartsItem.quantity;
        });

        cart.totalMrpPrice = totalPrice;
        cart.totalItem = cart.cartItems.length;
        cart.totalSellingPrice = totalDiscountedPrice - (cart.couponPrice || 0);
        cart.discount = this.calculateDiscountPercentage(
            totalPrice,
            totalDiscountedPrice
        );
        cart.totalItem = totalItem;

        let cartItems = await CartItem.find({ cart: cart._id }).populate("product")
        cart.cartItems = cartItems

        return cart;
    }

    calculateDiscountPercentage(mrpPrice, sellingPrice) {
        if (mrpPrice <= 0) {
            return 0;
        }
        const discount = mrpPrice - sellingPrice;
        const discountPercentage = (discount / mrpPrice) * 100;
        return Math.round(discountPercentage);
    }



    async addCartItem(user, product, size, quantity) {
        const cart = await this.findUserCart(user);

        let isPresent = await CartItem.findOne({
            cart: cart._id,
            product: product._id,
            size,
        }).populate("product");



        if (!isPresent) {
            const cartItem = new CartItem({
                product,
                quantity,
                userId: user._id,
                sellingPrice: quantity * product.sellingPrice,
                mrpPrice: quantity * product.mrpPrice,
                size,
                cart: cart._id,
            });

            await cartItem.save();

            let updatedCart = await Cart.findOneAndUpdate(
                { _id: cart._id }, 
                { $push: { cartItems: cartItem._id } }, 
                { new: true } 
            );

            console.log("updated cart", updatedCart);



            return cartItem;
        }

        return isPresent;
    }


}

module.exports = new CartService();
