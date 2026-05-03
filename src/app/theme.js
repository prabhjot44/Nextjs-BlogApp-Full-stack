"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c3aed",
      light: "#a78bfa",
      dark: "#5b21b6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#06b6d4",
      light: "#67e8f9",
      dark: "#0e7490",
    },
    background: {
      default: "#0f0f1a",
      paper: "#1a1a2e",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
    error: {
      main: "#ef4444",
    },
    success: {
      main: "#22c55e",
    },
    divider: "rgba(255,255,255,0.08)",
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 24px",
          fontSize: "0.95rem",
          transition: "all 0.2s ease",
          "&:hover": { transform: "translateY(-1px)" },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
          boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)",
            boxShadow: "0 6px 24px rgba(124,58,237,0.5)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7c3aed",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7c3aed",
              boxShadow: "0 0 0 3px rgba(124,58,237,0.15)",
            },
          },
          "& label.Mui-focused": { color: "#a78bfa" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(26,26,46,0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          transition: "all 0.3s ease",
          "&:hover": {
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(15,15,26,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});

export default theme;
