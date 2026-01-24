import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux Toolkit/Store";
import { fetchUserCart } from "../Redux Toolkit/Customer/CartSlice";
import { getWishlistByUserId } from "../Redux Toolkit/Customer/WishlistSlice";
import Navbar from "../customer/components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "../customer/pages/Home/Home";
import Products from "../customer/pages/Products/Products";
import SearchProducts from "../customer/pages/Search/SearchProducts";
import Reviews from "../customer/pages/Review/Reviews";
import WriteReviews from "../customer/pages/Review/WriteReview";
import ProductDetails from "../customer/pages/Products/ProductDetails/ProductDetails";
import Cart from "../customer/pages/Cart/Cart";
import Wishlist from "../customer/pages/Wishlist/Wishlist";
import AddressPage from "../customer/pages/Checkout/AddressPage";
import Profile from "../customer/pages/Account/Profile";
import Auth from "../customer/pages/Auth/Auth";
import PaymentSuccessHandler from "../customer/pages/Pyement/PaymentSuccessHandler";
import NotFound from "../customer/pages/NotFound/NotFound";
import Footer from "../customer/components/Footer/Footer";


const CustomerRoutes = () => {
  const dispatch = useAppDispatch()
    const {  auth } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchUserCart())
        dispatch(getWishlistByUserId())
    }, [auth.jwt])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/chat-bot' element={<ChatBot />} /> */}
        <Route path='/products/:categoryId' element={<Products />} />
        <Route path='/search-products' element={<SearchProducts />} />
        <Route path='/reviews/:productId' element={<Reviews />} />
        <Route path='/reviews/:productId/create' element={<WriteReviews />} />
        <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout/address' element={<AddressPage />} />
        <Route path='/account/*' element={<Profile />} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/payment-success/:orderId' element={<PaymentSuccessHandler/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  )
}

export default CustomerRoutes