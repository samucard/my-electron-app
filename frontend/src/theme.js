// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Colore primario
    },
    secondary: {
      main: "#dc004e", // Colore secondario
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8, // Base per i padding/margin (1 unità = 8px)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default theme;