// components/sidebar/MobileBottomNav.jsx

"use client";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material";
import { navigationItems } from "../../data/navigationData";

const MobileBottomNav = ({ activeSection, onSectionChange }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        background: theme.palette.background.sidebar,
        borderRadius: 0,
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
      }}
      elevation={3}
    >
      <BottomNavigation
        value={activeSection}
        onChange={(event, newValue) => {
          onSectionChange(newValue);
        }}
        sx={{
          background: "transparent",
          "& .MuiBottomNavigationAction-root": {
            color: "text.secondary",
            "&.Mui-selected": {
              color: "primary.main",
            },
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.75rem",
              fontWeight: 500,
            },
          },
        }}
      >
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.id}
            label={item.text}
            value={item.id}
            icon={item.icon}
            sx={{
              minWidth: 0,
              px: 1,
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
