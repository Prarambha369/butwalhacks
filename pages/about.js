import Head from "next/head"
import { Box, Container, Heading, Text, Grid, Flex } from "theme-ui"
import Footer from "../components/bin/Footer"
import Header from "../components/Header"

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - HackClub Butwal</title>
        <meta name="description" content="Learn about HackClub Butwal - Empowering the next generation of coders, makers, and innovators in Butwal, Nepal." />
      </Head>
      
      <Header />
      
      <Box as="main" sx={{ pt: [6, 7] }}>
        {/* Hero Section */}
        <Box
          sx={{
            bg: "#EC3750",
            color: "white",
            py: [5, 6],
            textAlign: "center",
          }}
        >
          <Container>
            <Text sx={{ fontSize: [2, 3], mb: 3, fontWeight: 500 }}>
              🌟 OUR STORY
            </Text>
            <Heading as="h1" sx={{ fontSize: [4, 5, 6], fontWeight: 800, mb: 4 }}>
              About HackClub Butwal
            </Heading>
            <Text sx={{ fontSize: [2, 3], maxWidth: 800, mx: "auto", mb: 4, opacity: 0.95 }}>
              Building the most vibrant student-led coding community, one project at a time. 
              Empowering young minds to shape the future through technology and innovation.
            </Text>
          </Container>
        </Box>

        {/* Our Story */}
        <Box sx={{ py: [4, 5] }}>
          <Container>
            <Heading as="h2" sx={{ fontSize: [3, 4], textAlign: "center", mb: 4, fontWeight: 700, color: "#2C3E50" }}>
              Our Story
            </Heading>
            <Grid columns={[1, 2]} gap={4} sx={{ alignItems: "center" }}>
              <Box>
                <Text sx={{ fontSize: [2, 3], lineHeight: 1.6, mb: 3, color: "#2C3E50" }}>
                  HackClub Butwal was born from a simple yet powerful idea: every student should have access to 
                  quality programming education and a supportive community to grow their skills.
                </Text>
                <Text sx={{ fontSize: [2, 3], lineHeight: 1.6, mb: 3, color: "#2C3E50" }}>
                  What started as informal coding sessions among friends has grown into a thriving 
                  community of over 500 active members, hosting regular workshops, hackathons, and tech events.
                </Text>
                <Text sx={{ fontSize: [2, 3], lineHeight: 1.6, mb: 3, color: "#2C3E50" }}>
                  Today, we're proud to be fostering the next generation of developers, innovators, and 
                  tech leaders who will shape the digital future.
                </Text>
              </Box>
              <Box sx={{ textAlign: "center", p: 4, bg: "#F8F9FA", borderRadius: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: 200,
                    bg: "#F8F9FA",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 5,
                    color: "#EC3750",
                    mx: "auto",
                    mb: 3
                  }}
                >
                  🚀
                </Box>
                <Text sx={{ fontStyle: "italic", color: "#7F8C8D" }}>
                  Our community during a recent workshop session
                </Text>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* Mission & Vision */}
        <Box sx={{ py: [4, 5] }}>
          <Container>
            <Grid columns={[1, 2]} gap={4}>
              <Box
                sx={{
                  bg: "#EC3750",
                  color: "white",
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Text sx={{ fontSize: 4, mb: 2 }}>🎯</Text>
                <Heading as="h3" sx={{ fontSize: [2, 3], mb: 2, color: "white" }}>
                  Our Mission
                </Heading>
                <Text sx={{ fontSize: [1, 2], lineHeight: 1.6 }}>
                  To empower young people with the technical skills, creative confidence, and 
                  collaborative spirit needed to become the next generation of technology leaders and innovators.
                </Text>
              </Box>
              <Box
                sx={{
                  bg: "#33D9B2",
                  color: "white",
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Text sx={{ fontSize: 4, mb: 2 }}>🌟</Text>
                <Heading as="h3" sx={{ fontSize: [2, 3], mb: 2, color: "white" }}>
                  Our Vision
                </Heading>
                <Text sx={{ fontSize: [1, 2], lineHeight: 1.6 }}>
                  A world where every young person has access to world-class technology education and the 
                  opportunity to use their skills to solve meaningful problems in their communities.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* Achievements */}
        <Box sx={{ py: [4, 5], bg: "#F8F9FA" }}>
          <Container>
            <Heading as="h2" sx={{ fontSize: [3, 4], textAlign: "center", mb: 4, fontWeight: 700, color: "#2C3E50" }}>
              Our Achievements
            </Heading>
            <Grid columns={[2, 3, 6]} gap={3}>
              {[
                { icon: "👥", number: "500+", label: "Active Members" },
                { icon: "🎓", number: "150+", label: "Workshops" },
                { icon: "🚀", number: "300+", label: "Projects Built" },
                { icon: "🎉", number: "25+", label: "Events" },
                { icon: "🤝", number: "15+", label: "Partners" },
                { icon: "💻", number: "100K+", label: "Lines of Code" }
              ].map((achievement, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 2,
                    bg: "white",
                    border: "1px solid #E9ECEF"
                  }}
                >
                  <Text sx={{ fontSize: 3, mb: 2 }}>{achievement.icon}</Text>
                  <Text sx={{ fontSize: [2, 3], fontWeight: 700, color: "#EC3750", display: "block", mb: 1 }}>
                    {achievement.number}
                  </Text>
                  <Text sx={{ fontSize: 1, color: "#2C3E50", fontWeight: 600 }}>
                    {achievement.label}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Our Values */}
        <Box sx={{ py: [4, 5] }}>
          <Container>
            <Heading as="h2" sx={{ fontSize: [3, 4], textAlign: "center", mb: 4, fontWeight: 700, color: "#2C3E50" }}>
              Our Values
            </Heading>
            <Grid columns={[1, 2]} gap={4}>
              {[
                {
                  icon: "🤝",
                  title: "Inclusivity & Diversity",
                  description: "We welcome everyone regardless of their background, experience level, or identity. Our community is built on respect, mutual support, and celebrating our differences."
                },
                {
                  icon: "🛠️",
                  title: "Learning by Doing",
                  description: "We believe the best way to learn programming is through hands-on projects, real-world applications, and collaborative problem-solving."
                },
                {
                  icon: "👥",
                  title: "Community First",
                  description: "Our strength comes from our community. We support each other, share knowledge freely, and grow together as a family of developers."
                },
                {
                  icon: "💡",
                  title: "Innovation & Impact",
                  description: "We encourage creative thinking and innovative solutions to problems, making technology accessible and impactful for everyone."
                }
              ].map((value, index) => (
                <Box
                  key={index}
                  sx={{
                    bg: "white",
                    borderRadius: 2,
                    p: 4,
                    border: "1px solid #E9ECEF"
                  }}
                >
                  <Text sx={{ fontSize: 4, mb: 2 }}>{value.icon}</Text>
                  <Heading as="h3" sx={{ fontSize: [2, 3], fontWeight: 700, mb: 2, color: "#2C3E50" }}>
                    {value.title}
                  </Heading>
                  <Text sx={{ color: "#7F8C8D", lineHeight: 1.6, fontSize: [1, 2] }}>
                    {value.description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Our Journey */}
        <Box sx={{ py: [4, 5], bg: "#F8F9FA" }}>
          <Container>
            <Heading as="h2" sx={{ fontSize: [3, 4], textAlign: "center", mb: 4, fontWeight: 700, color: "#2C3E50" }}>
              Our Journey
            </Heading>
            <Box sx={{ maxWidth: 800, mx: "auto" }}>
              {[
                {
                  emoji: "🌱",
                  year: "2022",
                  title: "HackClub Butwal Founded",
                  description: "Started with a small group of passionate students interested in coding and technology, meeting in local cafes and community centers to share knowledge."
                },
                {
                  emoji: "🎓",
                  year: "2022",
                  title: "First Workshop Series",
                  description: "Launched our first series of programming workshops, teaching Python and web development basics to over 50 students from different backgrounds."
                },
                {
                  emoji: "📈",
                  year: "2023",
                  title: "Community Growth",
                  description: "Expanded to over 200 active members and established partnerships with local tech organizations and educational institutions."
                },
                {
                  emoji: "🏆",
                  year: "2024",
                  title: "Major Hackathon",
                  description: "Organized our first major hackathon with participants from across the region, featuring 50+ teams and innovative projects solving real-world problems."
                }
              ].map((milestone, index) => (
                <Flex key={index} sx={{ alignItems: "flex-start", mb: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      mr: 3,
                      bg: "#EC3750",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Text sx={{ fontSize: 3, mb: 1 }}>{milestone.emoji}</Text>
                    <Text sx={{ fontSize: 1, fontWeight: 700 }}>{milestone.year}</Text>
                  </Box>
                  <Box>
                    <Heading as="h3" sx={{ fontSize: [2, 3], fontWeight: 700, mb: 2, color: "#2C3E50" }}>
                      {milestone.title}
                    </Heading>
                    <Text sx={{ color: "#7F8C8D", lineHeight: 1.6, fontSize: [1, 2] }}>
                      {milestone.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Meet Our Team */}
        <Box sx={{ py: [4, 5] }}>
          <Container>
            <Heading as="h2" sx={{ fontSize: [3, 4], textAlign: "center", mb: 4, fontWeight: 700, color: "#2C3E50" }}>
              Meet Our Team
            </Heading>
            <Grid columns={[1, 3]} gap={4}>
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & Lead Organizer",
                  bio: "Computer Science student passionate about building tech communities. Loves full-stack development and mentoring new programmers.",
                  skills: ["Python", "React", "Leadership"],
                  color: "#EC3750"
                },
                {
                  name: "Sarah Chen",
                  role: "Workshop Coordinator",
                  bio: "Full-stack developer who loves teaching and mentoring. Specializes in modern web technologies and creating engaging learning experiences.",
                  skills: ["JavaScript", "Node.js", "Teaching"],
                  color: "#33D9B2"
                },
                {
                  name: "Michael Davis",
                  role: "Community Manager",
                  bio: "Tech enthusiast focused on creating inclusive spaces for learning. Expert in event management and building strong community connections.",
                  skills: ["Event Planning", "Community Building", "Leadership"],
                  color: "#3742FA"
                }
              ].map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    p: 4,
                    bg: "white",
                    borderRadius: 2,
                    border: "1px solid #E9ECEF"
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      mx: "auto",
                      mb: 3,
                      overflow: "hidden",
                      border: `3px solid ${member.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 4,
                      bg: member.color,
                      color: "white"
                    }}
                  >
                    {index === 0 ? "👨‍💻" : index === 1 ? "👩‍🎓" : "👨‍💼"}
                  </Box>
                  <Heading as="h3" sx={{ fontSize: [2, 3], fontWeight: 700, mb: 1, color: "#2C3E50" }}>
                    {member.name}
                  </Heading>
                  <Text sx={{ color: "#EC3750", fontWeight: 600, mb: 2 }}>
                    {member.role}
                  </Text>
                  <Text sx={{ color: "#7F8C8D", lineHeight: 1.6, mb: 3, fontSize: [1, 2] }}>
                    {member.bio}
                  </Text>
                  <Flex sx={{ justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                    {member.skills.map((skill, skillIndex) => (
                      <Text
                        key={skillIndex}
                        sx={{
                          bg: "#F8F9FA",
                          color: "#2C3E50",
                          px: 2,
                          py: 1,
                          borderRadius: 20,
                          fontSize: 1,
                          fontWeight: 600,
                          border: "1px solid #E9ECEF"
                        }}
                      >
                        {skill}
                      </Text>
                    ))}
                  </Flex>
                </Box>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box sx={{ py: [4, 5] }}>
          <Container>
            <Box
              sx={{
                bg: "#EC3750",
                color: "white",
                p: [3, 4],
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Text sx={{ fontSize: 4, mb: 2 }}>🚀</Text>
              <Heading as="h2" sx={{ fontSize: [3, 4], fontWeight: 700, mb: 2 }}>
                Ready to Join Us?
              </Heading>
              <Text sx={{ fontSize: [2, 3], mb: 3, maxWidth: 600, mx: "auto" }}>
                Become part of our growing community and start your journey in technology today!
              </Text>
              <Flex sx={{ justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                <Box
                  as="a"
                  href="/community"
                  sx={{
                    display: "inline-block",
                    px: 3,
                    py: 2,
                    borderRadius: 2,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: [1, 2],
                    bg: "#FFD700",
                    color: "#1a1a24",
                  }}
                >
                  Join Our Community
                </Box>
                <Box
                  as="a"
                  href="/contact"
                  sx={{
                    display: "inline-block",
                    px: 3,
                    py: 2,
                    borderRadius: 2,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: [1, 2],
                    border: "2px solid white",
                    color: "white",
                  }}
                >
                  Get in Touch
                </Box>
              </Flex>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  )
}