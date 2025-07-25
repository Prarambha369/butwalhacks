"use client"

import { useState, useEffect } from "react"
import { Box, Container, Flex, Button } from "theme-ui"
import Link from "next/link"
import { Logo } from "./Footer"

export default function Nav({ color = "primary", dark = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    { href: "/workshops", label: "Workshops" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Box
      as="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bg: "#2C3E50",
        color: "white",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 2px 12px 0 rgba(44,62,80,0.07)",
        transition: "all 0.3s ease",
        py: 2,
        fontSize: [1, 2],
        letterSpacing: "0.01em",
      }}
    >
      <Container>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.1rem",
            letterSpacing: "0.01em",
            transition: "color 0.2s ease",
            marginRight: "1rem",
          }}>
            <Logo style={{ height: 28, marginRight: 8 }} />
            HackClub Butwal
          </Link>

          {/* Desktop Navigation */}
          <Flex
            sx={{
              display: ["none", null, "flex"],
              alignItems: "center",
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "medium",
                fontSize: "0.9rem",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
              }}>
                {item.label}
              </Link>
            ))}
          </Flex>

          {/* Mobile Menu Button */}
          <Button
            sx={{
              display: ["block", null, "none"],
              bg: "transparent",
              border: "none",
              color: "white",
              fontSize: 3,
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box
            sx={{
              display: ["block", null, "none"],
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              bg: "white",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              borderRadius: "lg",
              mt: 2,
              p: 3,
            }}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{
                display: "block",
                color: "#222",
                textDecoration: "none",
                padding: "0.5rem 0",
                borderBottom: "1px solid #e9ecef",
                fontSize: "0.9rem",
                transition: "color 0.2s ease",
              }}
              onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  )
}
