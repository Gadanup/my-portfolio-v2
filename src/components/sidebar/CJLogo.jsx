// components/sidebar/CJLogo.jsx

"use client";

const CJLogo = ({ size = 60, mobile = false }) => {
  const gradientId = mobile ? "cjGradientMobile" : "cjGradient";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4a90e2" }} />
          <stop offset="50%" style={{ stopColor: "#73b6f1" }} />
          <stop offset="100%" style={{ stopColor: "#d81b60" }} />
        </linearGradient>
      </defs>
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="24"
        fontWeight="800"
        fill={`url(#${gradientId})`}
      >
        CJ
      </text>
    </svg>
  );
};

export default CJLogo;
