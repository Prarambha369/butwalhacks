import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          width: isClicking ? "20px" : "30px",
          height: isClicking ? "20px" : "30px",
          borderRadius: "50%",
          border: "2px solid",
          borderColor: "primary",
          transform: "translate(-50%, -50%)",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
          opacity: isVisible ? 0.7 : 0,
          mixBlendMode: "difference",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "accent",
          transform: "translate(-50%, -50%)",
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: "0 0 15px 2px",
          color: "primary",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
