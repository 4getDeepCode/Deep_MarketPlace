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

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <Profile />
      {/* <Home /> */}
      {/* <Products/> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      {/* <AddressPage/> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
