"use client";
import {
  Box,
  Typography,
  Card,
  Chip,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MobileExperienceCard = ({ job, index, isLast }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        background: `linear-gradient(135deg, ${job.companyColor}08 0%, ${job.companyColor}03 100%)`,
        border: `1px solid ${job.companyColor}20`,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 40px ${job.companyColor}20`,
          borderColor: `${job.companyColor}60`,
        },
      }}
    >
      {/* Status Indicator Bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: job.current
            ? "linear-gradient(90deg, #4caf50 0%, #66bb6a 100%)"
            : `linear-gradient(90deg, ${job.companyColor} 0%, ${job.companyColor}80 100%)`,
        }}
      />

      {/* Main Content */}
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
          {/* Company Icon */}
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${job.companyColor} 0%, ${job.companyColor}cc 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "white",
              boxShadow: `0 8px 24px ${job.companyColor}40`,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)`,
                transform: "translate(-20%, -20%)",
              },
            }}
          >
            {job.company.substring(0, 2).toUpperCase()}
          </Box>

          {/* Job Info */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    fontSize: "1.1rem",
                    color: "text.primary",
                    mb: 0.5,
                  }}
                >
                  {job.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: job.companyColor,
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {job.company}
                </Typography>
              </Box>

              {job.current && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <Chip
                    label="Current"
                    icon={
                      <PlayArrowIcon sx={{ fontSize: "16px !important" }} />
                    }
                    sx={{
                      background:
                        "linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      boxShadow: "0 4px 12px rgba(76, 175, 80, 0.4)",
                    }}
                  />
                </motion.div>
              )}
            </Box>

            {/* Date and Location */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarTodayIcon
                  sx={{
                    fontSize: 16,
                    color: job.companyColor,
                    opacity: 0.8,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                  }}
                >
                  {job.period}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon
                  sx={{
                    fontSize: 16,
                    color: job.companyColor,
                    opacity: 0.8,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                  }}
                >
                  {job.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Tech Stack Highlight */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: 1,
              color: "text.secondary",
              mb: 1,
              display: "block",
            }}
          >
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {job.technologies.slice(0, 5).map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Chip
                  label={tech}
                  size="small"
                  sx={{
                    background: `${job.companyColor}20`,
                    color: job.companyColor,
                    border: `1px solid ${job.companyColor}40`,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    height: 28,
                    "& .MuiChip-label": {
                      px: 1.5,
                    },
                  }}
                />
              </motion.div>
            ))}
            {job.technologies.length > 5 && (
              <Chip
                label={`+${job.technologies.length - 5}`}
                size="small"
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "text.secondary",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  height: 28,
                }}
              />
            )}
          </Box>
        </Box>

        {/* Quick Summary */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.6,
              color: "text.primary",
              fontWeight: 400,
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "none" : 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {job.responsibilities[0]}
          </Typography>
        </Box>

        {/* Expand Button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={toggleExpanded}
            sx={{
              background: `${job.companyColor}15`,
              color: job.companyColor,
              border: `1px solid ${job.companyColor}30`,
              borderRadius: 2,
              px: 2,
              py: 0.5,
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                background: `${job.companyColor}25`,
                transform: "scale(1.05)",
              },
            }}
          >
            {expanded ? (
              <>
                Show Less
                <KeyboardArrowUpIcon sx={{ ml: 0.5, fontSize: 20 }} />
              </>
            ) : (
              <>
                View Details
                <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: 20 }} />
              </>
            )}
          </IconButton>
        </Box>
      </Box>

      {/* Expandable Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Divider sx={{ borderColor: `${job.companyColor}30` }} />

            <Box sx={{ p: 3, pt: 2 }}>
              {/* All Responsibilities */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: job.companyColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    letterSpacing: 1,
                  }}
                >
                  <WorkOutlineIcon sx={{ fontSize: 18 }} />
                  Responsibilities
                </Typography>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  {job.responsibilities.map((responsibility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                          p: 1.5,
                          borderRadius: 2,
                          background: `${job.companyColor}05`,
                          border: `1px solid ${job.companyColor}15`,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: job.companyColor,
                            mt: 0.8,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 1.5,
                            color: "text.primary",
                            fontWeight: 400,
                          }}
                        >
                          {responsibility}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              {/* All Technologies */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: job.companyColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    letterSpacing: 1,
                  }}
                >
                  <CodeIcon sx={{ fontSize: 18 }} />
                  All Technologies
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {job.technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Chip
                        label={tech}
                        size="small"
                        sx={{
                          background: `${job.companyColor}20`,
                          color: job.companyColor,
                          border: `1px solid ${job.companyColor}40`,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>

              {/* Achievements */}
              {job.achievements.length > 0 && (
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#4caf50",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                      letterSpacing: 1,
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 18 }} />
                    Key Achievements
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {job.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Chip
                          label={achievement}
                          size="small"
                          icon={
                            <EmojiEventsIcon
                              sx={{ fontSize: "14px !important" }}
                            />
                          }
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%)",
                            color: "#4caf50",
                            border: "1px solid rgba(76, 175, 80, 0.4)",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default MobileExperienceCard;
