"use client"

import { useState, useEffect } from "react"
import { Box, Container, Heading, Text, Button, Grid, Flex } from "theme-ui"
import Header from "../components/Header"
import Footer from "../components/bin/Footer"
import CustomCursor from "../components/effects/CustomCursor"
import DecorativeShapes from "../components/effects/DecorativeShapes"
import HoverSparkles from "../components/effects/HoverSparkles"
import Icon from "@hackclub/icons"
import Link from "next/link"

const stats = [
  { number: "40+", label: "Active Members" },
  { number: "5", label: "Projects Built" },
  { number: "10", label: "Workshops Held" },
  { number: "3", label: "Events" },
]

const features = [
  {
    icon: "code",
    title: "Learn to Code",
    description:
      "Master programming languages like Python, JavaScript, and more through hands-on workshops and projects.",
  },
  {
    icon: "users",
    title: "Build Community",
    description: "Connect with like-minded peers, collaborate on projects, and grow together as developers.",
  },
  {
    icon: "tool",
    title: "Create Projects",
    description: "Turn your ideas into reality with guidance from mentors and access to resources.",
  },
  {
    icon: "trophy",
    title: "Win Competitions",
    description: "Participate in hackathons and coding competitions to showcase your skills and win prizes.",
  },
]

const upcomingEvents = [
  {
    title: "Web Development Workshop",
    date: "Jan 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Hub Butwal",
    type: "Workshop",
  },
  {
    title: "AI/ML Bootcamp",
    date: "Jan 22, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Online",
    type: "Bootcamp",
  },
  {
    title: "Monthly Hackathon",
    date: "Feb 5, 2026",
    time: "9:00 AM - 9:00 PM",
    location: "Innovation Center",
    type: "Hackathon",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <CustomCursor />
      <DecorativeShapes />
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url('/assets/favicon/index-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          mt: "80px",
        }}
      >
        <Container>
          <Grid columns={[1]} gap={[4, 5]} sx={{ alignItems: "center" }}>
            <Box>
              <Heading
                as="h1"
                sx={{
                  fontSize: [4, 5, 6],
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Welcome to Hack Club Butwal
              </Heading>
              <Text
                sx={{
                  fontSize: [2, 3],
                  lineHeight: 1.6,
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: "600px",
                }}
              >
                Join Nepal's most vibrant community of young coders, makers, and innovators. Learn, build, and ship
                amazing projects together!
              </Text>
              <Flex sx={{ gap: 3, flexWrap: "wrap" }}>
                <Link href="/community">
                  <Button
                    sx={{
                      fontSize: [2, 3],
                      px: 3,
                      py: 2,
                      bg: "#FFD700",
                      color: "#1a1a24",
                      border: "none",
                      borderRadius: 2,
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                      fontWeight: 600,
                    }}
                  >
                    <Icon glyph="member-add" size={20} />
                    Join Community
                  </Button>
                </Link>
                <Link href="/workshops">
                  <Button
                    sx={{
                      fontSize: [2, 3],
                      px: 3,
                      py: 2,
                      bg: "transparent",
                      color: "white",
                      border: "2px solid white",
                      borderRadius: 2,
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                      fontWeight: 600,
                    }}
                  >
                    <Icon glyph="event" size={20} />
                    View Workshops
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: [4, 5], bg: "white" }}>
        <Container>
          <Grid columns={[2, 4]} gap={[3, 4]}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Heading
                  as="h3"
                  sx={{
                    fontSize: [3, 4, 5],
                    fontWeight: 700,
                    color: "#EC3750",
                    mb: 2,
                  }}
                >
                  {stat.number}
                </Heading>
                <Text sx={{ fontSize: [2, 3], color: "#2C3E50", fontWeight: 600 }}>{stat.label}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: [4, 5], bg: "#F8F9FA" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: [4, 5] }}>
            <Heading
              as="h2"
              sx={{
                fontSize: [3, 4, 5],
                fontWeight: 700,
                mb: 3,
                color: "#2C3E50",
              }}
            >
              Why Join Hack Club Butwal?
            </Heading>
            <Text
              sx={{
                fontSize: [2, 3],
                color: "#7F8C8D",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Discover the opportunities that await you in our thriving tech community
            </Text>
          </Box>
          <Grid columns={[1, 2, 4]} gap={[3, 4]}>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  bg: "white",
                  p: 4,
                  borderRadius: 2,
                  textAlign: "center",
                  border: "1px solid #E9ECEF",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    bg: "#EC3750",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <Icon glyph={feature.icon} size={24} color="white" />
                </Box>
                <Heading
                  as="h3"
                  sx={{
                    fontSize: [2, 3],
                    fontWeight: 700,
                    mb: 2,
                    color: "#2C3E50",
                  }}
                >
                  {feature.title}
                </Heading>
                <Text
                  sx={{
                    fontSize: [1, 2],
                    color: "#7F8C8D",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Box sx={{ py: [4, 5], bg: "white" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: [4, 5] }}>
            <Heading
              as="h2"
              sx={{
                fontSize: [3, 4, 5],
                fontWeight: 700,
                mb: 3,
                color: "#2C3E50",
              }}
            >
              Upcoming Events
            </Heading>
            <Text
              sx={{
                fontSize: [2, 3],
                color: "#7F8C8D",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Don't miss out on our exciting workshops, hackathons, and community meetups
            </Text>
          </Box>
          <Grid columns={[1, 2, 3]} gap={[3, 4]}>
            {upcomingEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  bg: "white",
                  border: "1px solid #E9ECEF",
                  borderRadius: 2,
                  p: 4,
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    bg: "#EC3750",
                    color: "white",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 1,
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  {event.type}
                </Box>
                <Heading
                  as="h3"
                  sx={{
                    fontSize: [2, 3],
                    fontWeight: 700,
                    mb: 2,
                    color: "#2C3E50",
                  }}
                >
                  {event.title}
                </Heading>
                <Box sx={{ mb: 2 }}>
                  <Text
                    sx={{ fontSize: [1, 2], color: "#7F8C8D", display: "flex", alignItems: "center", gap: 2, mb: 1 }}
                  >
                    <Icon glyph="calendar" size={16} />
                    {event.date}
                  </Text>
                  <Text
                    sx={{ fontSize: [1, 2], color: "#7F8C8D", display: "flex", alignItems: "center", gap: 2, mb: 1 }}
                  >
                    <Icon glyph="clock" size={16} />
                    {event.time}
                  </Text>
                  <Text sx={{ fontSize: [1, 2], color: "#7F8C8D", display: "flex", alignItems: "center", gap: 2 }}>
                    <Icon glyph="location" size={16} />
                    {event.location}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: [4, 5] }}>
            <Link href="/workshops">
              <Button
                sx={{
                  fontSize: [2, 3],
                  px: 3,
                  py: 2,
                  bg: "#EC3750",
                  color: "white",
                  border: "none",
                  borderRadius: 2,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  fontWeight: 600,
                }}
              >
                View All Events
                <Icon glyph="view-forward" size={18} />
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: [4, 5],
          bg: "#2C3E50",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <Heading
            as="h2"
            sx={{
              fontSize: [3, 4, 5],
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ready to Start Your Journey?
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Join hundreds of students who are already building the future. Your coding adventure starts here!
          </Text>
          <Flex sx={{ gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/community">
              <Button
                sx={{
                  fontSize: [2, 3],
                  px: 3,
                  py: 2,
                  bg: "#EC3750",
                  color: "white",
                  border: "none",
                  borderRadius: 2,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  fontWeight: 600,
                }}
              >
                <Icon glyph="slack" size={20} />
                Join Our Slack
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                sx={{
                  fontSize: [2, 3],
                  px: 3,
                  py: 2,
                  bg: "transparent",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: 2,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  fontWeight: 600,
                }}
              >
                <Icon glyph="email" size={20} />
                Get in Touch
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </>
  )
}
