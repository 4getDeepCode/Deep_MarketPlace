import { Button, ThemeProvider } from "@mui/material"
import customTheme from "./Theme/customTheme"
import "@fontsource/poppins";


function App() {

  return (
   <ThemeProvider theme={customTheme}>
    <Button variant="contained" color="primary">deepMarketPlace</Button>
     <Button variant="contained" color="secondary">deepMarketPlace</Button>
  </ThemeProvider>
  )
}

export default App
