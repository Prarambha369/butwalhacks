import React from "react";
import {Box} from "theme-ui";

/**
 * Renders animated decorative shapes in the background of the hero section.
 *
 * Creates floating geometric shapes with subtle animations to add visual interest
 * without being distracting from the main content.
 */
export default function DecorativeShapes() {
    return (
        <>
            {/* Floating circles */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    bg: "primary",
                    opacity: 0.1,
                    "@keyframes float1": {
                        "0%": {transform: "translateY(0px) rotate(0deg)"},
                        "33%": {transform: "translateY(-20px) rotate(120deg)"},
                        "66%": {transform: "translateY(10px) rotate(240deg)"},
                        "100%": {transform: "translateY(0px) rotate(360deg)"},
                    },
                    animation: "float1 8s ease-in-out infinite",
                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: "20%",
                    right: "15%",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bg: "secondary",
                    opacity: 0.15,
                    "@keyframes float2": {
                        "0%": {transform: "translateY(0px) rotate(0deg)"},
                        "50%": {transform: "translateY(-30px) rotate(180deg)"},
                        "100%": {transform: "translateY(0px) rotate(360deg)"},
                    },
                    animation: "float2 6s ease-in-out infinite",
                    zIndex: 0,
                }}
            />

            {/* Floating triangles */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "20%",
                    left: "20%",
                    width: 0,
                    height: 0,
                    borderLeft: "25px solid transparent",
                    borderRight: "25px solid transparent",
                    borderBottom: "43px solid",
                    borderBottomColor: "accent",
                    opacity: 0.1,
                    "@keyframes float3": {
                        "0%": {transform: "translateY(0px) rotate(0deg)"},
                        "25%": {transform: "translateY(-15px) rotate(90deg)"},
                        "50%": {transform: "translateY(0px) rotate(180deg)"},
                        "75%": {transform: "translateY(15px) rotate(270deg)"},
                        "100%": {transform: "translateY(0px) rotate(360deg)"},
                    },
                    animation: "float3 10s ease-in-out infinite",
                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: "30%",
                    right: "10%",
                    width: 0,
                    height: 0,
                    borderLeft: "20px solid transparent",
                    borderRight: "20px solid transparent",
                    borderBottom: "35px solid",
                    borderBottomColor: "highlight",
                    opacity: 0.12,
                    "@keyframes float4": {
                        "0%": {transform: "translateY(0px) rotate(0deg)"},
                        "40%": {transform: "translateY(20px) rotate(144deg)"},
                        "80%": {transform: "translateY(-10px) rotate(288deg)"},
                        "100%": {transform: "translateY(0px) rotate(360deg)"},
                    },
                    animation: "float4 7s ease-in-out infinite",
                    zIndex: 0,
                }}
            />

            {/* Floating squares */}
            <Box
                sx={{
                    position: "absolute",
                    top: "60%",
                    left: "5%",
                    width: "30px",
                    height: "30px",
                    bg: "primary",
                    opacity: 0.08,
                    "@keyframes float5": {
                        "0%": {transform: "translateY(0px) rotate(0deg)"},
                        "33%": {transform: "translateY(-25px) rotate(120deg)"},
                        "66%": {transform: "translateY(15px) rotate(240deg)"},
                        "100%": {transform: "translateY(0px) rotate(360deg)"},
                    },
                    animation: "float5 9s ease-in-out infinite",
                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: "40%",
                    right: "5%",
                    width: "35px",
                    height: "35px",
                    bg: "secondary",
                    opacity: 0.1,
                    borderRadius: "8px",
                    "@keyframes float6": {
                        "0%": {transform: "translateY(0px) rotate(0deg)"},
                        "50%": {transform: "translateY(-20px) rotate(180deg)"},
                        "100%": {transform: "translateY(0px) rotate(360deg)"},
                    },
                    animation: "float6 11s ease-in-out infinite",
                    zIndex: 0,
                }}
            />

            {/* Subtle gradient overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: (theme) =>
                        `radial-gradient(circle at 30% 20%, ${theme.colors.primary}15 0%, transparent 50%), 
             radial-gradient(circle at 70% 80%, ${theme.colors.secondary}10 0%, transparent 50%)`,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
        </>
    );
}
