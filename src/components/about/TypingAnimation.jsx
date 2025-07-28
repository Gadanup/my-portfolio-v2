// components/about/TypingAnimation.jsx

"use client";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { typingWords } from "../../data/aboutData";

const TypingAnimation = () => {
  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentWord = typingWords[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(
      () => {
        if (!isDeleting && charIndex <= currentWord.length) {
          setTypingText(currentWord.slice(0, charIndex));
          charIndex++;
        } else if (isDeleting && charIndex >= 0) {
          setTypingText(currentWord.slice(0, charIndex));
          charIndex--;
        }

        if (charIndex === currentWord.length + 1) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }

        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          setCurrentIndex((prev) => (prev + 1) % typingWords.length);
          clearInterval(typeInterval);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <Box sx={{ mb: 4, minHeight: 40 }}>
      <Typography
        variant="h5"
        sx={{
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {typingText}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "3px",
            height: "1em",
            backgroundColor: "primary.main",
            ml: 1,
            animation: "blink 1s infinite",
            "@keyframes blink": {
              "0%, 50%": { opacity: 1 },
              "51%, 100%": { opacity: 0 },
            },
          }}
        />
      </Typography>
    </Box>
  );
};

export default TypingAnimation;
