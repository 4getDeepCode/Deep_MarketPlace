import {  ThemeProvider } from "@mui/material"
import customTheme from "./Theme/customTheme"
import "@fontsource/poppins";
import Home from "./customer/pages/Home/Home";



function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
