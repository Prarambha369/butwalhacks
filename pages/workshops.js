"use client"

import {useState} from "react"
import Head from "next/head"
import {Container, Box, Heading, Text, Grid, Flex, Button, Spinner, Badge} from "theme-ui"
import EventCard from "../components/EventCard"
import Header from "../components/Header"
import Footer from "../components/bin/Footer"

// Demo static data for events
const demoEvents = [
    {
        id: 2,
        title: "React Workshop",
        date: "2025-02-22",
        tags: ["Intermediate", "React", "Frontend"],
        description: "Build your first React application and learn modern frontend development practices.",
        location: "Butwal Tech Hub",
        link: "#",
        time: "10:00 AM - 4:00 PM",
        instructor: "Priya Singh",
        image: "/assets/favicon/5.jpg",
    },
    {
        id: 3,
        title: "Python for Data Science",
        date: "2025-03-01",
        tags: ["Intermediate", "Python", "Data Science"],
        description: "Explore data analysis and visualization using Python libraries like pandas and matplotlib.",
        location: "Online",
        link: "#",
        time: "1:00 PM - 6:00 PM",
        instructor: "Rohan Thapa",
        image: "/assets/favicon/3.jpg",
    },
    {
        id: 4,
        title: "Mobile App Development with Flutter",
        date: "2025-03-08",
        tags: ["Intermediate", "Flutter", "Mobile"],
        description: "Create cross-platform mobile applications using Google's Flutter framework.",
        location: "Butwal Innovation Center",
        link: "#",
        time: "9:00 AM - 5:00 PM",
        instructor: "Sita Poudel",
        image: "/assets/favicon/9.jpg",
    },
    {
        id: 6,
        title: "Web Design Fundamentals",
        date: "2025-01-15",
        tags: ["Beginner", "Design", "CSS"],
        description: "Learn the basics of web design, HTML, CSS, and responsive design principles.",
        location: "Butwal Tech Hub",
        link: "#",
        time: "10:00 AM - 3:00 PM",
        instructor: "Priya Singh",
        image: "/assets/favicon/7.png",
    },
]

export default function Workshops() {
    const events = demoEvents
    const isLoading = false
    const error = null
    const [filter, setFilter] = useState("all")

    // Get unique tags from all events
    const allTags = events.reduce((tags, event) => {
        if (event.tags) {
            event.tags.forEach((tag) => {
                if (!tags.includes(tag)) {
                    tags.push(tag)
                }
            })
        }
        return tags
    }, [])

    // Filter events based on selected tag
    const filteredEvents = filter === "all" ? events : events.filter((event) => event.tags && event.tags.includes(filter))

    // Separate upcoming and past events
    const now = new Date()
    const upcomingEvents = filteredEvents.filter((event) => new Date(event.date) >= now)
    const pastEvents = filteredEvents.filter((event) => new Date(event.date) < now)

    return (
        <>
            <Head>
                <title>Workshops & Events – HackClub Butwal</title>
                <meta
                    name="description"
                    content="Join our upcoming workshops and events at HackClub Butwal. Learn coding, design, and more!"
                />
                <meta property="og:title" content="Workshops & Events - HackClub Butwal"/>
                <meta
                    property="og:description"
                    content="Discover hands-on workshops and community events in Butwal. From beginner-friendly coding sessions to advanced hackathons."
                />
            </Head>

            <Header/>

            <Box
                sx={{
                    bg: "linear-gradient(135deg, #EC3750 0%, #FF8C37 100%)",
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
                            color: "black",
                        }}
                    >
                        Workshops & Events
                    </Heading>
                    <Text sx={{fontSize: [2, 3], maxWidth: "600px", mx: "auto", opacity: 0.95}}>
                        Join our hands-on workshops and community events to learn new skills, build projects, and
                        connect with
                        fellow coders in Butwal.
                    </Text>
                </Container>
            </Box>

            <Container sx={{py: [4, 5]}}>
                {/* Filter buttons */}
                <Box sx={{mb: 5}}>
                    <Heading as="h2" sx={{mb: 3, textAlign: "center", color: "black"}}>
                        Filter by Category
                    </Heading>
                    <Flex
                        sx={{
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 2,
                        }}
                    >
                        <Button variant={filter === "all" ? "primary" : "outline"} onClick={() => setFilter("all")}
                                sx={{mb: 2}}>
                            All Events ({filteredEvents.length})
                        </Button>

                        {allTags.map((tag) => {
                            const tagCount = events.filter((event) => event.tags && event.tags.includes(tag)).length
                            return (
                                <Button
                                    key={tag}
                                    variant={filter === tag ? "primary" : "outline"}
                                    onClick={() => setFilter(tag)}
                                    sx={{
                                        mb: 2,
                                        bg: filter === tag ? "primary" : "white",
                                        color: filter === tag ? "white" : "black",
                                        borderColor: "primary",
                                    }}
                                >
                                    {tag} ({tagCount})
                                </Button>
                            )
                        })}
                    </Flex>
                </Box>

                {isLoading ? (
                    <Flex sx={{justifyContent: "center", py: 5}}>
                        <Spinner size={48}/>
                        <Text sx={{ml: 3, color: "black"}}>Loading events...</Text>
                    </Flex>
                ) : error ? (
                    <Box sx={{textAlign: "center", py: 4}}>
                        <Text sx={{color: "secondary", mb: 2}}>{error}</Text>
                        <Text sx={{color: "black"}}>Showing fallback data instead.</Text>
                    </Box>
                ) : (
                    <>
                        {/* Upcoming Events */}
                        {upcomingEvents.length > 0 && (
                            <Box sx={{mb: 6}}>
                                <Flex sx={{alignItems: "center", mb: 4}}>
                                    <Heading as="h2" sx={{fontSize: [4, 5], mr: 3, color: "black"}}>
                                        Upcoming Events
                                    </Heading>
                                    <Badge variant="primary" sx={{px: 3, py: 1, fontSize: 1}}>
                                        {upcomingEvents.length} event{upcomingEvents.length !== 1 ? "s" : ""}
                                    </Badge>
                                </Flex>
                                <Grid columns={[1, null, 2, 3]} gap={4}>
                                    {upcomingEvents.map((event) => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                                </Grid>
                            </Box>
                        )}

                        {/* Past Events */}
                        {pastEvents.length > 0 && (
                            <Box sx={{mb: 6}}>
                                <Flex sx={{alignItems: "center", mb: 4}}>
                                    <Heading as="h2" sx={{fontSize: [4, 5], mr: 3, color: "black"}}>
                                        Past Events
                                    </Heading>
                                    <Badge variant="outline"
                                           sx={{px: 3, py: 1, fontSize: 1, borderColor: "muted", color: "black"}}>
                                        {pastEvents.length} event{pastEvents.length !== 1 ? "s" : ""}
                                    </Badge>
                                </Flex>
                                <Grid columns={[1, null, 2, 3]} gap={4}>
                                    {pastEvents.map((event) => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                                </Grid>
                            </Box>
                        )}

                        {/* No events found */}
                        {filteredEvents.length === 0 && (
                            <Box sx={{textAlign: "center", py: 5}}>
                                <Heading as="h3" sx={{mb: 3, color: "black"}}>
                                    No events found
                                </Heading>
                                <Text sx={{mb: 3, color: "black"}}>
                                    No events match the selected filter. Try selecting a different category.
                                </Text>
                                <Button
                                    variant="outline"
                                    onClick={() => setFilter("all")}
                                    sx={{bg: "white", color: "black", borderColor: "primary"}}
                                >
                                    Show all events
                                </Button>
                            </Box>
                        )}
                    </>
                )}

                {/* Call to Action Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        mt: 6,
                        p: [4, 5],
                        bg: "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
                        borderRadius: "default",
                        border: "1px solid",
                        borderColor: "smoke",
                    }}
                >
                    <Heading as="h2" sx={{mb: 3, fontSize: [3, 4], color: "black"}}>
                        Want to suggest a workshop?
                    </Heading>
                    <Text sx={{mb: 4, maxWidth: "600px", mx: "auto", color: "black"}}>
                        Have an idea for a workshop or want to lead one yourself? We're always looking for new topics
                        and speakers!
                        Whether you're an expert in a particular technology or just passionate about sharing knowledge,
                        we'd love to
                        hear from you.
                    </Text>
                    <Flex sx={{justifyContent: "center", gap: 3, flexWrap: "wrap"}}>
                        <Button as="a" href="/contact" variant="primary">
                            Suggest a Workshop
                        </Button>
                        <Button
                            as="a"
                            href="/contact"
                            variant="outline"
                            sx={{bg: "white", color: "black", borderColor: "primary"}}
                        >
                            Become a Speaker
                        </Button>
                    </Flex>
                </Box>

                {/* Workshop Guidelines */}
                <Box sx={{mt: 6}}>
                    <Heading as="h2" sx={{mb: 4, textAlign: "center", color: "black"}}>
                        Workshop Guidelines
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
                            <Box sx={{fontSize: 4, mb: 3}}>🎓</Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: "primary"}}>
                                Beginner Friendly
                            </Heading>
                            <Text sx={{fontSize: 1, color: "black"}}>
                                All our workshops are designed to be accessible to beginners. No prior experience
                                required!
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
                            <Box sx={{fontSize: 4, mb: 3}}>💻</Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: "primary"}}>
                                Hands-on Learning
                            </Heading>
                            <Text sx={{fontSize: 1, color: "black"}}>
                                We believe in learning by doing. Bring your laptop and get ready to code!
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
                            <Box sx={{fontSize: 4, mb: 3}}>👥</Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: "primary"}}>
                                Community Driven
                            </Heading>
                            <Text sx={{fontSize: 1, color: "black"}}>
                                Our workshops are led by community members who are passionate about sharing knowledge.
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Container>

            <Footer/>
        </>
    )
}
