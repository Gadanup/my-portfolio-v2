// components/about/AnimatedCounter.jsx

"use client";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({ value }) => {
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || animatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            if (value === "∞") {
              element.textContent = "∞";
              observer.disconnect();
              return;
            }

            const targetValue = parseInt(value.replace("+", ""));
            const hasPlus = value.includes("+");
            let currentValue = 0;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              currentValue = Math.floor(targetValue * progress);
              element.textContent = hasPlus
                ? `${currentValue}+`
                : currentValue.toString();

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                element.textContent = hasPlus
                  ? `${targetValue}+`
                  : targetValue.toString();
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return <span ref={elementRef}>0</span>;
};

export default AnimatedCounter;
