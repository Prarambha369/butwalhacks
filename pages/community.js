import Head from "next/head"
import { Container, Box, Heading, Text, Grid, Flex, Button, Spinner } from "theme-ui"
import MemberCard from "../components/MemberCard"
import Header from "../components/Header"
import Footer from "../components/bin/Footer"

// Demo static data for team members
const demoMembers = [
  {
    name: "Alex Sharma",
    role: "Lead Organizer",
    bio: "Passionate about empowering youth through code and building inclusive tech communities.",
    avatar: "/assets/favicon/3.jpg",
    socials: { github: "https://github.com/alex", twitter: "", linkedin: "" },
  },
  {
    name: "Priya Singh",
    role: "Community Manager",
    bio: "Building bridges in the tech community and organizing amazing events.",
    avatar: "/assets/favicon/5.jpg",
    socials: { github: "", twitter: "", linkedin: "https://linkedin.com/in/priya" },
  },
  {
    name: "Rohan Thapa",
    role: "Technical Lead",
    bio: "Full-stack developer passionate about teaching and mentoring newcomers.",
    avatar: "/assets/favicon/7.png",
    socials: { github: "https://github.com/rohan", twitter: "", linkedin: "" },
  },
  {
    name: "Sita Poudel",
    role: "Workshop Coordinator",
    bio: "Organizing hands-on workshops and ensuring everyone learns by doing.",
    avatar: "/assets/favicon/9.jpg",
    socials: { github: "", twitter: "https://twitter.com/sita", linkedin: "" },
  },
]

export default function Community() {
  const members = demoMembers
  const isLoading = false
  const error = null

  return (
    <>
      <Head>
        <title>Community – HackClub Butwal</title>
        <meta
          name="description"
          content="Meet the team behind HackClub Butwal and learn how to get involved in our community."
        />
        <meta property="og:title" content="Community - HackClub Butwal" />
        <meta
          property="og:description"
          content="Discover the passionate individuals who make HackClub Butwal a vibrant coding community in Nepal."
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
            Our Community
          </Heading>
          <Text sx={{ fontSize: [2, 3], maxWidth: "600px", mx: "auto", opacity: 0.95 }}>
            Meet the passionate team behind HackClub Butwal who are dedicated to fostering a vibrant coding community in
            Butwal.
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [4, 5] }}>
        {/* Mission Section */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Heading as="h2" sx={{ mb: 4, fontSize: [4, 5], color: "black" }}>
            Our Mission
          </Heading>
          <Text
            sx={{
              fontSize: [2, 3],
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              mb: 4,
              color: "black",
            }}
          >
            HackClub Butwal is on a mission to empower students with the skills, community, and support they need to
            become the next generation of technology leaders and innovators.
          </Text>
          <Grid columns={[1, 3]} gap={4} sx={{ maxWidth: "800px", mx: "auto" }}>
            <Box
              sx={{
                p: 4,
                borderRadius: "default",
                bg: "white",
                textAlign: "center",
                boxShadow: "card",
                border: "1px solid",
                borderColor: "smoke",
              }}
            >
              <Box sx={{ fontSize: 4, mb: 2 }}>🚀</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Learn by Doing
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                We believe in hands-on learning through real projects and collaborative coding.
              </Text>
            </Box>
            <Box
              sx={{
                p: 4,
                borderRadius: "default",
                bg: "white",
                textAlign: "center",
                boxShadow: "card",
                border: "1px solid",
                borderColor: "smoke",
              }}
            >
              <Box sx={{ fontSize: 4, mb: 2 }}>👥</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Peer Mentorship
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                Students teaching students creates a supportive and relatable learning environment.
              </Text>
            </Box>
            <Box
              sx={{
                p: 4,
                borderRadius: "default",
                bg: "white",
                textAlign: "center",
                boxShadow: "card",
                border: "1px solid",
                borderColor: "smoke",
              }}
            >
              <Box sx={{ fontSize: 4, mb: 2 }}>🌟</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Inclusive Community
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                We create an environment where everyone can thrive, regardless of background or experience.
              </Text>
            </Box>
          </Grid>
        </Box>

        {/* Join Community Section */}
        <Box
          sx={{
            bg: "#F8FAFC",
            p: [4, 5],
            borderRadius: "default",
            textAlign: "center",
            mb: 6,
            border: "1px solid",
            borderColor: "smoke",
          }}
        >
          <Heading as="h2" sx={{ mb: 3, fontSize: [3, 4], color: "black" }}>
            Join Our Community
          </Heading>
          <Text sx={{ mb: 4, maxWidth: "600px", mx: "auto", color: "black" }}>
            We're always looking for passionate individuals to join our community. Whether you're a beginner or an
            experienced coder, there's a place for you at HackClub Butwal.
          </Text>

          <Grid columns={[1, 2, 4]} gap={3} sx={{ mb: 4 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
              }}
            >
              <Box sx={{ fontSize: 3, mb: 2 }}>🎓</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Students
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>Join workshops, build projects, and learn with peers.</Text>
            </Box>
            <Box
              sx={{
                p: 3,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
              }}
            >
              <Box sx={{ fontSize: 3, mb: 2 }}>🧑‍🏫</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Mentors
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>Share your knowledge and help guide the next generation.</Text>
            </Box>
            <Box
              sx={{
                p: 3,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
              }}
            >
              <Box sx={{ fontSize: 3, mb: 2 }}>🎤</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Speakers
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>
                Lead workshops and share your expertise with the community.
              </Text>
            </Box>
            <Box
              sx={{
                p: 3,
                borderRadius: "default",
                bg: "white",
                boxShadow: "card",
              }}
            >
              <Box sx={{ fontSize: 3, mb: 2 }}>📋</Box>
              <Heading as="h3" sx={{ mb: 2, fontSize: 2, color: "primary" }}>
                Organizers
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>Help plan events and grow the community in Butwal.</Text>
            </Box>
          </Grid>

          <Flex
            sx={{
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <Button as="a" href="/contact" variant="primary">
              Get Involved
            </Button>
            <Button
              as="a"
              href="https://hackclub.com/slack"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              sx={{ bg: "white", color: "black", borderColor: "primary" }}
            >
              Join Hack Club Slack
            </Button>
          </Flex>
        </Box>

        {/* Community Stats */}
        <Box
          sx={{
            textAlign: "center",
            p: 4,
            bg: "white",
            borderRadius: "default",
            boxShadow: "card",
            border: "1px solid",
            borderColor: "smoke",
          }}
        >
          <Heading as="h2" sx={{ mb: 4, fontSize: [3, 4], color: "black" }}>
            Community Impact
          </Heading>
          <Grid columns={[2, 3]} gap={4}>
            <Box>
              <Heading as="h3" sx={{ fontSize: [4, 5], color: "primary", mb: 1 }}>
                50+
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>Active Members</Text>
            </Box>
            <Box>
              <Heading as="h3" sx={{ fontSize: [4, 5], color: "secondary", mb: 1 }}>
                25+
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>Workshops Conducted</Text>
            </Box>
            <Box>
              <Heading as="h3" sx={{ fontSize: [4, 5], color: "accent", mb: 1 }}>
                100+
              </Heading>
              <Text sx={{ fontSize: 1, color: "black" }}>Projects Built</Text>
            </Box>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  )
}
