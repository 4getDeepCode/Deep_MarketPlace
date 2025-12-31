import { createTheme } from "@mui/material/styles";

const modernLightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#06B6D4", // cyan
    },

    secondary: {
      main: "#7C3AED", // violet
    },

    background: {
      default: "#F8FAFC", // soft light gray
      paper: "#FFFFFF", // clean white cards
    },

    text: {
      primary: "#0F172A", // deep navy text
      secondary: "#475569", // muted slate
    },

    success: {
      main: "#16A34A",
    },

    warning: {
      main: "#F59E0B",
    },

    error: {
      main: "#E11D48",
    },
  },

  typography: {
    fontFamily: "Inter, Poppins, system-ui, sans-serif",

    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 20px",
        },
        containedPrimary: {
          color: "#FFFFFF",
          background: "linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default modernLightTheme;
