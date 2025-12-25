import {  ThemeProvider } from "@mui/material"
import customTheme from "./Theme/customTheme"
import "@fontsource/poppins";
import Home from "./customer/pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
