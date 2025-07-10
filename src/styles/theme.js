import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4a90e2",
      light: "#73b6f1",
      dark: "#2a6ab0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d81b60",
      light: "#ff5c8d",
      dark: "#a00046",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
      light: "#f6685e",
      dark: "#aa2e25",
    },
    warning: {
      main: "#ff9800",
      light: "#ffa726",
      dark: "#b26a00",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
    success: {
      main: "#4caf50",
      light: "#6fbf73",
      dark: "#357a38",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
      sidebar: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
      card: "#252525",
      accent: "rgba(74, 144, 226, 0.1)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
      disabled: "#666666",
      accent: "#4a90e2",
    },
    divider: "rgba(255, 255, 255, 0.08)",
    action: {
      hover: "rgba(74, 144, 226, 0.08)",
      selected: "rgba(74, 144, 226, 0.16)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-0.015em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.005em",
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      color: "#b0b0b0",
      lineHeight: 1.4,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: "0.875rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          padding: "10px 20px",
          fontSize: "0.875rem",
          fontWeight: 500,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(74, 144, 226, 0.3)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
          boxShadow: "0 4px 15px rgba(74, 144, 226, 0.2)",
          "&:hover": {
            background: "linear-gradient(135deg, #73b6f1 0%, #4a90e2 100%)",
            boxShadow: "0 8px 25px rgba(74, 144, 226, 0.4)",
          },
          "&:active": {
            boxShadow: "0 2px 10px rgba(74, 144, 226, 0.3)",
          },
        },
        outlined: {
          borderColor: "#4a90e2",
          color: "#4a90e2",
          "&:hover": {
            borderColor: "#73b6f1",
            backgroundColor: "rgba(74, 144, 226, 0.1)",
          },
        },
        text: {
          color: "#b0b0b0",
          "&:hover": {
            backgroundColor: "rgba(74, 144, 226, 0.1)",
            color: "#ffffff",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(26, 26, 26, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
          borderRadius: 16,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#252525",
          borderRadius: 16,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
          zIndex: 1,
          overflow: "visible", // Critical fix for border clipping
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          // Ensure content doesn't clip borders
          "& .MuiCardContent-root": {
            position: "relative",
            zIndex: 2,
          },
          "&:hover": {
            transform: "translateY(-8px)",
            zIndex: 10,
            overflow: "visible", // Maintain visibility on hover
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(74, 144, 226, 0.3)",
            borderColor: "rgba(74, 144, 226, 0.3)",
            // Ensure background doesn't hide border
            "&::before": {
              display: "none",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "rgba(74, 144, 226, 0.1)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: "4px 0",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "rgba(74, 144, 226, 0.1)",
            transform: "translateX(8px)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(74, 144, 226, 0.2)",
            borderLeft: "4px solid #4a90e2",
            "&:hover": {
              backgroundColor: "rgba(74, 144, 226, 0.25)",
            },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
          fontSize: "0.9rem",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
        },
      },
    },
    // Fix for Grid containers to prevent overflow issues
    MuiGrid: {
      styleOverrides: {
        container: {
          overflow: "visible",
        },
        item: {
          overflow: "visible",
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  spacing: 8,
  shadows: [
    "none",
    "0 2px 8px rgba(0, 0, 0, 0.1)",
    "0 4px 12px rgba(0, 0, 0, 0.15)",
    "0 8px 24px rgba(0, 0, 0, 0.2)",
    "0 12px 32px rgba(0, 0, 0, 0.25)",
    "0 16px 48px rgba(0, 0, 0, 0.3)",
    "0 20px 64px rgba(0, 0, 0, 0.35)",
    "0 24px 80px rgba(0, 0, 0, 0.4)",
    ...Array(17).fill("0 24px 80px rgba(0, 0, 0, 0.4)"),
  ],
});

export default theme;
