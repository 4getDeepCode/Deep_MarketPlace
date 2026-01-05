import { ThemeProvider } from "@mui/material";
import customTheme from "./Theme/customTheme";
import "@fontsource/poppins";
import Home from "./customer/pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./customer/pages/Products/Products";
import Footer from "./customer/components/Footer/Footer";
import ProductDetails from "./customer/pages/Products/ProductDetails/ProductDetails";
import Cart from "./customer/pages/Cart/Cart";
import AddressPage from "./customer/pages/Checkout/AddressPage";
import Navbar from "./customer/components/Navbar/Navbar";
import Profile from "./customer/pages/Account/Profile";
import { Route, Routes } from "react-router";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      
     
<Routes>
 <Route path='/seller/*' element={<SellerDashboard />} />
</Routes>

{/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout/address" element={<AddressPage/>}/>
        <Route path="/account/*" element={<Profile/>}/>
        
      </Routes>

       <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
