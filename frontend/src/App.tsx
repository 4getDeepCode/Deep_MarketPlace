import {  ThemeProvider } from "@mui/material"
import customTheme from "./Theme/customTheme"
import "@fontsource/poppins";
import Home from "./customer/pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./customer/pages/Products/Products";
import Footer from "./customer/components/Footer/Footer";




function App() {

  return (
    <ThemeProvider theme={customTheme}>
      {/* <Home /> */}
      <Products/>

      <Footer/>
    </ThemeProvider>
  )
}

export default App
