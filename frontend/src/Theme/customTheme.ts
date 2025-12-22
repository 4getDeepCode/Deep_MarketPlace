import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#00927C" },
    secondary: { main: "#F1F5F9" },
    warning: { main: "#F59E0B" },
    success: { main: "#22C55E" },
    error: { main: "#EF4444" },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
    },
  },



});

export default customTheme;
