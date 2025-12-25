import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FFFFFF" },
    secondary: { main: "#5a67d8" },
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
