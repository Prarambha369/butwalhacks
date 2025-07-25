"use client"

import { useState } from "react"
import Head from "next/head"
import { Container, Grid, Box, Text, Heading, Button, Flex } from "theme-ui"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/bin/Footer"

// Demo gallery images with categories
const galleryImages = [
  {
    id: 3,
    url: "/assets/favicon/3.jpg",
    caption: "Team Building Activity",
    category: "Team",
    date: "April 10, 2023",
  },
  {
    id: 5,
    url: "/assets/favicon/5.jpg",
    caption: "Community Meetup",
    category: "Events",
    date: "February 18, 2023",
  },
  {
    id: 7,
    url: "/assets/favicon/7.png",
    caption: "React Workshop",
    category: "Workshops",
    date: "December 12, 2022",
  },
  {
    id: 9,
    url: "/assets/favicon/9.jpg",
    caption: "Mobile App Development",
    category: "Projects",
    date: "October 25, 2022",
  },
]

// Get unique categories
const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

// Animation variants for gallery items
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
}

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <Head>
        <title>Gallery – HackClub Butwal</title>
        <meta
          name="description"
          content="Browse photos from our HackClub Butwal events, workshops, and team activities."
        />
        <meta property="og:title" content="Gallery - HackClub Butwal" />
        <meta
          property="og:description"
          content="Explore moments from our workshops, hackathons, and community events in Butwal."
        />
      </Head>

      <Header />

      <Box
        sx={{
          bg: "#EC3750",
          color: "white",
          py: [5, 6],
          textAlign: "center",
          mt: "80px",
        }}
      >
        <Container>
          <Heading
            as="h1"
            sx={{
              fontSize: [5, 6, 7],
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Gallery
          </Heading>
          <Text sx={{ fontSize: [2, 3], maxWidth: "600px", mx: "auto", opacity: 0.95 }}>
            Explore photos from our workshops, events, and community activities. See the energy and passion of our
            coding community in action.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        {/* Filter buttons */}
        <Box sx={{ mb: 5 }}>
          <Heading as="h2" sx={{ mb: 3, textAlign: "center", color: "black" }}>
            Filter by Category
          </Heading>
          <Flex
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {categories.map((category) => {
              const count =
                category === "All"
                  ? galleryImages.length
                  : galleryImages.filter((img) => img.category === category).length

              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "primary" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  sx={{
                    mb: 2,
                    bg: activeCategory === category ? "primary" : "white",
                    color: activeCategory === category ? "white" : "black",
                    borderColor: "primary",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {category} ({count})
                </Button>
              )
            })}
          </Flex>
        </Box>

        {filteredImages.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 5 }}>
            <Heading as="h3" sx={{ mb: 3, color: "black" }}>
              No images found
            </Heading>
            <Text sx={{ mb: 3, color: "black" }}>
              No images match the selected category. Try selecting a different filter.
            </Text>
            <Button
              variant="outline"
              onClick={() => setActiveCategory("All")}
              sx={{ bg: "white", color: "black", borderColor: "primary" }}
            >
              Show all images
            </Button>
          </Box>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" key={activeCategory}>
            <Grid columns={[1, 2, 3]} gap={4}>
              <AnimatePresence mode="wait">
                {filteredImages.map((img) => (
                  <motion.div
                    key={img.id}
                    variants={itemVariants}
                    layout
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box
                      sx={{
                        borderRadius: "default",
                        overflow: "hidden",
                        boxShadow: "card",
                        cursor: "pointer",
                        transition: "box-shadow 0.3s ease-in-out",
                        bg: "white",
                        border: "1px solid",
                        borderColor: "smoke",
                        "&:hover": {
                          boxShadow: "elevated",
                        },
                      }}
                      onClick={() => setSelectedImage(img)}
                    >
                      <Box sx={{ position: "relative", height: 250, overflow: "hidden" }}>
                        <Image
                          src={img.url || "/placeholder.svg"}
                          alt={img.caption}
                          fill
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.5s ease-in-out",
                          }}
                          className="gallery-image"
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 2,
                            right: 2,
                            bg: "rgba(0,0,0,0.7)",
                            color: "white",
                            px: 2,
                            py: 1,
                            borderRadius: "default",
                            fontSize: 0,
                          }}
                        >
                          {img.category}
                        </Box>
                      </Box>
                      <Box sx={{ p: 3 }}>
                        <Heading as="h3" sx={{ fontSize: 2, mb: 1, color: "black" }}>
                          {img.caption}
                        </Heading>
                        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
                          <Text sx={{ fontSize: 1, color: "primary" }}>{img.category}</Text>
                          <Text sx={{ fontSize: 0, color: "#666666" }}>{img.date}</Text>
                        </Flex>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Grid>
          </motion.div>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.9)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  position: "relative",
                }}
              >
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.caption}
                  width={800}
                  height={600}
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bg: "rgba(0,0,0,0.8)",
                    color: "white",
                    p: 3,
                    textAlign: "center",
                  }}
                >
                  <Heading as="h3" sx={{ mb: 1, color: "white" }}>
                    {selectedImage.caption}
                  </Heading>
                  <Text sx={{ fontSize: 1, opacity: 0.8 }}>
                    {selectedImage.category} • {selectedImage.date}
                  </Text>
                </Box>
                <Button
                  onClick={() => setSelectedImage(null)}
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    bg: "rgba(0,0,0,0.7)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": {
                      bg: "rgba(0,0,0,0.9)",
                    },
                  }}
                >
                  ✕
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            p: [4, 5],
            bg: "#F8FAFC",
            borderRadius: "default",
            border: "1px solid",
            borderColor: "smoke",
          }}
        >
          <Heading as="h2" sx={{ mb: 3, fontSize: [3, 4], color: "black" }}>
            Have photos to share?
          </Heading>
          <Text sx={{ mb: 4, maxWidth: "600px", mx: "auto", color: "black" }}>
            If you've attended our events and have photos you'd like to share, we'd love to feature them in our gallery!
            Help us showcase the amazing moments from our community.
          </Text>
          <Flex sx={{ justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button as="a" href="/contact" variant="primary">
              Submit Your Photos
            </Button>
            <Button
              as="a"
              href="mailto:gallery@hackclubbutwal.com"
              variant="outline"
              sx={{ bg: "white", color: "black", borderColor: "primary" }}
            >
              Email Gallery Team
            </Button>
          </Flex>
        </Box>

        {/* Photo Guidelines */}
        <Box sx={{ mt: 6 }}>
          <Heading as="h2" sx={{ mb: 4, textAlign: "center", color: "black" }}>
            Photo Submission Guidelines
          </Heading>
          <Grid columns={[1, 2, 3]} gap={4}>
            <Box
              sx={{
                p: 4,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
                textAlign: "center",
                border: "1px solid",
                borderColor: "smoke",
              }}
            >
              <Box
                sx={{
                  fontSize: 4,
                  mb: 3,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                📸
              </Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                High Quality
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                Please submit high-resolution photos (at least 1080p) for the best display quality.
              </Text>
            </Box>

            <Box
              sx={{
                p: 4,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
                textAlign: "center",
                border: "1px solid",
                borderColor: "smoke",
              }}
            >
              <Box
                sx={{
                  fontSize: 4,
                  mb: 3,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                👥
              </Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Consent Required
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                Ensure all people in photos have given consent for public sharing on our website.
              </Text>
            </Box>

            <Box
              sx={{
                p: 4,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
                textAlign: "center",
                border: "1px solid",
                borderColor: "smoke",
              }}
            >
              <Box
                sx={{
                  fontSize: 4,
                  mb: 3,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                🏷️
              </Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Include Details
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                Provide event name, date, and a brief description to help us categorize your photos.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  )
}
