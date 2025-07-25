import React from "react";
import { Box } from "theme-ui";

export default function HamburgerMenu({ isOpen, toggle }) {
  return (
    <Box
      as="button"
      onClick={toggle}
      sx={{
        display: ["block", "block", "none"],
        position: "relative",
        width: "32px",
        height: "32px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 1000,
        p: 0,
      }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Box
        as="span"
        sx={{
          display: "block",
          position: "absolute",
          width: "24px",
          height: "3px",
          bg: "text",
          borderRadius: "3px",
          left: "4px",
          top: isOpen ? "14px" : "8px",
          transform: isOpen ? "rotate(45deg)" : "none",
          transition: "transform 0.3s ease, top 0.3s ease",
        }}
      />
      <Box
        as="span"
        sx={{
          display: "block",
          position: "absolute",
          width: "24px",
          height: "3px",
          bg: "text",
          borderRadius: "3px",
          left: "4px",
          top: "14px",
          opacity: isOpen ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
      <Box
        as="span"
        sx={{
          display: "block",
          position: "absolute",
          width: "24px",
          height: "3px",
          bg: "text",
          borderRadius: "3px",
          left: "4px",
          top: isOpen ? "14px" : "20px",
          transform: isOpen ? "rotate(-45deg)" : "none",
          transition: "transform 0.3s ease, top 0.3s ease",
        }}
      />
    </Box>
  );
}
