import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Text, Flex } from "theme-ui";
import Image from "next/image";
import DecorativeShapes from "./Animation/DecorativeShapes";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("./Animation/CustomCursor"), {
  ssr: false,
});

function LogoCard() {
  return (
    <Box
      sx={{
        width: 200,
        maxWidth: "70vw",
        mb: 4,
        borderRadius: 32,
        boxShadow: "0 8px 32px rgba(30,80,160,0.15)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        mx: "auto",
        transition: "all 0.3s ease-in-out",
        "@keyframes heartbeat": {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.1)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
        },
        "@keyframes flicker": {
          "0%": { opacity: 1 },
          "25%": { opacity: 0.85 },
          "50%": { opacity: 0.95 },
          "75%": { opacity: 0.9 },
          "100%": { opacity: 1 },
        },
        animation: "flicker 5s ease-in-out infinite",
        "&:hover": {
          animation: "heartbeat 1.5s ease-in-out infinite",
          boxShadow: "0 8px 32px rgba(231,91,37,0.3)",
        },
      }}
    >
      <Image
        src="/assets/logo/rlogo.svg"
        alt="HackClub Butwal Logo"
        width={200}
        height={200}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </Box>
  );
}

function HeroHeading() {
  return (
    <Heading
      as="h1"
      sx={{
        fontSize: [5, 6, 7],
        mb: 3,
        letterSpacing: "-0.03em",
        fontWeight: "bold",
        color: "text",
        textShadow: (theme) => `0 2px 16px ${theme.colors.primary}`,
        textAlign: "center",
        lineHeight: "1.2",
        position: "relative",
        zIndex: 1,
        "@keyframes flicker": {
          "0%": (theme) => ({
            opacity: 1,
            textShadow: `0 2px 16px ${theme.colors.primary}`,
          }),
          "25%": (theme) => ({
            opacity: 0.95,
            textShadow: `0 2px 12px ${theme.colors.primary}`,
          }),
          "50%": (theme) => ({
            opacity: 0.97,
            textShadow: `0 2px 18px ${theme.colors.primary}`,
          }),
          "75%": (theme) => ({
            opacity: 0.96,
            textShadow: `0 2px 14px ${theme.colors.primary}`,
          }),
          "100%": (theme) => ({
            opacity: 1,
            textShadow: `0 2px 16px ${theme.colors.primary}`,
          }),
        },
        animation: "flicker 7s ease-in-out infinite",
      }}
    >
      HackClub Butwal
    </Heading>
  );
}

/**
 * Displays a centered, styled tagline announcing the upcoming website launch for young coders and tech enthusiasts in Butwal.
 */
function Tagline() {
  return (
    <Text
      sx={{
        fontSize: [2, 3],
        mb: 4,
        opacity: 0.95,
        maxWidth: 600,
        mx: "auto",
        color: "text",
        textAlign: "center",
        lineHeight: "1.5",
        position: "relative",
        zIndex: 1,
          fontWeight: "medium",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
      }}
    >
        We're building something amazing for young coders and Techies in Butwal.
      <br />
      Our website is launching soon. Stay tuned!
    </Text>
  );
}

/**
 * Renders a prominently styled button linking to the HackClub Butwal GitHub page.
 */
function CTAButton() {
  return (
    <Flex
      sx={{ justifyContent: "center", mb: 4, position: "relative", zIndex: 1 }}
    >
      <Button
        as="a"
        href="https://github.com/HackClub-Butwal"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
            bg: "primary",
            color: "white",
          fontWeight: "bold",
          px: 4,
          py: 3,
          borderRadius: "circle",
          fontSize: [2, 3],
            boxShadow: "0 4px 12px rgba(30,80,160,0.25)",
          transition: "all 0.2s",
          letterSpacing: "0.01em",
          "&:hover": { bg: "secondary", transform: "scale(1.05)" },
        }}
      >
        Visit our GitHub
      </Button>
    </Flex>
  );
}

/**
 * Displays a footer with the current year and HackClub Butwal copyright.
 */
function FooterText() {
  return (
    <Text sx={{ fontSize: 1, opacity: 0.7, position: "relative", zIndex: 1 }}>
        &copy; {new Date().getFullYear()} HackClub Butwal
    </Text>
  );
}

/**
 * Renders the animated hero section of the landing page, including branding, heading, tagline, call-to-action button, decorative shapes, and a custom cursor.
 *
 * Applies theme-based background and text colors, background flicker animation, and hides the default cursor in favor of a custom cursor after client-side mount.
 * The section is vertically and horizontally centered, occupying the full viewport height.
 */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // Add class to body to hide default cursor
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.add("custom-cursor");

      return () => {
        document.body.classList.remove("custom-cursor");
      };
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
          bg: "background",
          color: "text",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        position: "relative",
        overflow: "hidden",
        "@keyframes backgroundFlicker": {
          "0%": { opacity: 1 },
          "25%": { opacity: 0.9 },
          "50%": { opacity: 0.95 },
          "75%": { opacity: 0.92 },
          "100%": { opacity: 1 },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
            background: "background",
          animation: "backgroundFlicker 8s ease-in-out infinite",
          zIndex: 0,
        },
      }}
    >
      <style jsx global>{`
        .custom-cursor {
          cursor: none !important;
        }
        .custom-cursor * {
          cursor: none !important;
        }
      `}</style>
      {mounted && <CustomCursor />}
      <DecorativeShapes />
      <LogoCard />
      <HeroHeading />
      <Tagline />
      <CTAButton />
      <FooterText />
    </Box>
  );
}
