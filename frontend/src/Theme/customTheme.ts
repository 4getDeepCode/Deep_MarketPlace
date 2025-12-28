import { createTheme } from "@mui/material/styles";

const modernTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#22D3EE", // cyan accent
    },

    secondary: {
      main: "#8B5CF6", // violet
    },

    background: {
      default: "#0F172A", // deep navy
      paper: "#111827", // surface cards
    },

    text: {
      primary: "#E5E7EB",
      secondary: "#9CA3AF",
    },

    success: {
      main: "#22C55E",
    },

    warning: {
      main: "#FBBF24",
    },

    error: {
      main: "#F43F5E",
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
          background: "linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
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

export default modernTheme;
