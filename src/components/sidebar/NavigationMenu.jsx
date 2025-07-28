// components/sidebar/NavigationMenu.jsx

"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { navigationItems } from "../../data/navigationData";

const NavigationMenu = ({ activeSection, onSectionChange }) => {
  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: "text.secondary",
          mt: 1,
          mb: 2,
          px: 2,
          textTransform: "uppercase",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
        }}
      >
        Navigation
      </Typography>

      <List sx={{ p: 0 }}>
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={activeSection === item.id}
                onClick={() => onSectionChange(item.id)}
                sx={{
                  borderRadius: 2,
                  textTransform: "uppercase",
                  py: 1.5,
                  px: 2,
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.1) 100%)",
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color:
                      activeSection === item.id
                        ? "primary.main"
                        : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 600 : 400,
                    color:
                      activeSection === item.id
                        ? "primary.main"
                        : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
};

export default NavigationMenu;
