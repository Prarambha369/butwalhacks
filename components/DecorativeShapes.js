import React, { useMemo } from "react";
import { Box } from "theme-ui";

export default function DecorativeShapes() {
  const palette = [
    "#FF6EC7",
    "#00E5FF",
    "#FFA500",
    "#7D3C98",
    "#76FF03",
    "#FF7043",
  ];
  const shapes = useMemo(() => {
    const rand = (min, max) => Math.random() * (max - min) + min;
    return Array.from({ length: 10 }).map(() => {
      const size = rand(100, 400);
      const x = rand(-20, 120);
      const y = rand(-20, 120);
      const blur = rand(20, 80);
      const color = palette[Math.floor(rand(0, palette.length))];
      const duration = rand(6, 15).toFixed(2);
      const delay = rand(0, 5).toFixed(2);
      return {
        position: "absolute",
        top: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at center, ${color} 20%, transparent 100%)`,
        borderRadius: "50%",
        zIndex: 0,
        filter: `blur(${blur}px)`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      };
    });
  }, []);

  return (
    <>
      {shapes.map((sx, i) => (
        <Box as="span" key={i} sx={sx} />
      ))}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
}
