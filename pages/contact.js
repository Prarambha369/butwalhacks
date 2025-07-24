"use client"

import {useState} from "react"
import Head from "next/head"
import {Container, Box, Heading, Text, Card, Grid, Link, Flex, Button, Input, Textarea} from "theme-ui"
import {useRouter} from "next/router"
import Icon from "@hackclub/icons"
import Header from "../components/Header"
import Footer from "../components/bin/Footer"

export default function Contact() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState("")

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus("success")
            setIsSubmitting(false)
            setFormData({name: "", email: "", subject: "", message: ""})
        }, 1000)
    }

    const faqs = [
        {
            question: "How can I join HackClub Butwal?",
            answer:
                "Simply fill out our contact form above or join our Discord/Slack community. We welcome all skill levels and backgrounds!",
        },
        {
            question: "Do I need programming experience?",
            answer:
                "Not at all! We have workshops for complete beginners as well as advanced developers. Our community is built on learning together.",
        },
        {
            question: "Are your events free?",
            answer:
                "Yes! All our workshops, meetups, and events are completely free for participants. We believe in making tech education accessible to everyone.",
        },
        {
            question: "How often do you organize events?",
            answer:
                "We typically host 2-3 events per month, including workshops, hackathons, and community meetups. Follow us on social media to stay updated!",
        },
        {
            question: "Can I suggest a workshop topic?",
            answer:
                "We're always looking for new workshop ideas and speakers. Use the contact form to share your suggestions.",
        },
        {
            question: "Do you provide certificates?",
            answer:
                "Yes, we provide certificates of participation for our workshops and completion certificates for our project-based programs.",
        },
    ]

    return (
        <>
            <Head>
                <title>Contact – HackClub Butwal</title>
                <meta
                    name="description"
                    content="Get in touch with HackClub Butwal via our contact form or reach out through social media."
                />
                <meta property="og:title" content="Contact HackClub Butwal"/>
                <meta
                    property="og:description"
                    content="Connect with the HackClub Butwal community. We'd love to hear from you!"
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
                        }}
                    >
                        Get In Touch
                    </Heading>
                    <Text sx={{fontSize: [2, 3], maxWidth: "600px", mx: "auto", opacity: 0.95}}>
                        Have questions about our workshops? Want to join our community? We'd love to hear from you!
                    </Text>
                </Container>
            </Box>

            <Container sx={{py: [4, 5], px: [3, 4]}}>
                <Grid columns={[1, null, 2]} gap={5} sx={{mb: 5}}>
                    <Card
                        sx={{
                            p: 4,
                            borderRadius: "default",
                            boxShadow: "card",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            bg: "white",
                            border: "1px solid",
                            borderColor: "smoke",
                        }}
                    >
                        <Heading as="h2" sx={{mb: 3, fontSize: [3, 4], color: "black"}}>
                            Send us a Message
                        </Heading>
                        <Text sx={{mb: 4, color: "black"}}>
                            Have a question or want to get involved? Fill out this form and we'll get back to you as
                            soon as possible.
                        </Text>

                        {submitStatus === "success" && (
                            <Box
                                sx={{
                                    p: 3,
                                    mb: 3,
                                    bg: "success",
                                    color: "white",
                                    borderRadius: "default",
                                    textAlign: "center",
                                }}
                            >
                                Thank you! Your message has been sent successfully.
                            </Box>
                        )}

                        <Box as="form" onSubmit={handleSubmit}>
                            <Grid gap={3}>
                                <Input
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    sx={{
                                        p: 3,
                                        border: "1px solid",
                                        borderColor: "smoke",
                                        borderRadius: "default",
                                        fontSize: 2,
                                        "&:focus": {
                                            borderColor: "primary",
                                            outline: "none",
                                        },
                                    }}
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    sx={{
                                        p: 3,
                                        border: "1px solid",
                                        borderColor: "smoke",
                                        borderRadius: "default",
                                        fontSize: 2,
                                        "&:focus": {
                                            borderColor: "primary",
                                            outline: "none",
                                        },
                                    }}
                                />
                                <Input
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    sx={{
                                        p: 3,
                                        border: "1px solid",
                                        borderColor: "smoke",
                                        borderRadius: "default",
                                        fontSize: 2,
                                        "&:focus": {
                                            borderColor: "primary",
                                            outline: "none",
                                        },
                                    }}
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    sx={{
                                        p: 3,
                                        border: "1px solid",
                                        borderColor: "smoke",
                                        borderRadius: "default",
                                        fontSize: 2,
                                        fontFamily: "inherit",
                                        resize: "vertical",
                                        "&:focus": {
                                            borderColor: "primary",
                                            outline: "none",
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    sx={{
                                        p: 3,
                                        fontSize: 2,
                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                        opacity: isSubmitting ? 0.7 : 1,
                                    }}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </Grid>
                        </Box>
                    </Card>

                    <Card
                        sx={{
                            p: 4,
                            borderRadius: "default",
                            boxShadow: "card",
                            bg: "white",
                            border: "1px solid",
                            borderColor: "smoke",
                        }}
                    >
                        <Heading as="h2" sx={{mb: 3, fontSize: [3, 4], color: "black"}}>
                            Connect With Us
                        </Heading>

                        <Grid gap={4} sx={{mb: 4}}>
                            <Flex sx={{alignItems: "center"}}>
                                <Box sx={{mr: 3, color: "primary", minWidth: "32px"}}>
                                    <Icon glyph="mail" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: "bold", mb: 1, color: "black"}}>Email</Text>
                                    <Link
                                        href="mailto:hello@hackclubbutwal.com"
                                        sx={{
                                            color: "primary",
                                            textDecoration: "none",
                                            "&:hover": {color: "secondary"},
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        hello@hackclubbutwal.com
                                    </Link>
                                </Box>
                            </Flex>

                            <Flex sx={{alignItems: "center"}}>
                                <Box sx={{mr: 3, color: "primary", minWidth: "32px"}}>
                                    <Icon glyph="instagram" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: "bold", mb: 1, color: "black"}}>Instagram</Text>
                                    <Link
                                        href="https://instagram.com/hackclubbutwal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "primary",
                                            textDecoration: "none",
                                            "&:hover": {color: "secondary"},
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        @hackclubbutwal
                                    </Link>
                                </Box>
                            </Flex>

                            <Flex sx={{alignItems: "center"}}>
                                <Box sx={{mr: 3, color: "primary", minWidth: "32px"}}>
                                    <Icon glyph="github" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: "bold", mb: 1, color: "black"}}>GitHub</Text>
                                    <Link
                                        href="https://github.com/hackclub-butwal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "primary",
                                            textDecoration: "none",
                                            "&:hover": {color: "secondary"},
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        hackclub-butwal
                                    </Link>
                                </Box>
                            </Flex>

                            <Flex sx={{alignItems: "center"}}>
                                <Box sx={{mr: 3, color: "primary", minWidth: "32px"}}>
                                    <Icon glyph="location" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: "bold", mb: 1, color: "black"}}>Location</Text>
                                    <Text sx={{color: "black"}}>Butwal, Nepal</Text>
                                </Box>
                            </Flex>
                        </Grid>

                        <Box sx={{mb: 4}}>
                            <Heading as="h3" sx={{mb: 3, fontSize: 2, color: "black"}}>
                                Join Our Community
                            </Heading>
                            <Text sx={{mb: 3, color: "black"}}>
                                We host regular meetups and workshops in Butwal. Follow us on social media to stay
                                updated on our next
                                event.
                            </Text>

                            <Grid gap={2}>
                                <Button
                                    as="a"
                                    href="https://hackclub.com/slack"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                >
                                    Join Hack Club Slack <Icon glyph="external-link" size={16}
                                                               style={{marginLeft: "8px"}}/>
                                </Button>

                                <Button
                                    as="a"
                                    href="https://discord.gg/butwalhacks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outline"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        bg: "white",
                                        color: "black",
                                        borderColor: "primary",
                                    }}
                                >
                                    Join Our Discord <Icon glyph="external-link" size={16} style={{marginLeft: "8px"}}/>
                                </Button>
                            </Grid>
                        </Box>

                        <Box
                            sx={{
                                p: 3,
                                bg: "smoke",
                                borderRadius: "default",
                                textAlign: "center",
                            }}
                        >
                            <Heading as="h4" sx={{mb: 2, fontSize: 1, color: "black"}}>
                                Office Hours
                            </Heading>
                            <Text sx={{fontSize: 1, color: "black"}}>
                                We're available for questions and support:
                                <br/>
                                <strong>Weekdays:</strong> 4:00 PM - 8:00 PM
                                <br/>
                                <strong>Weekends:</strong> 10:00 AM - 6:00 PM
                            </Text>
                        </Box>
                    </Card>
                </Grid>

                {/* FAQ Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        p: [4, 5],
                        bg: "white",
                        borderRadius: "default",
                        boxShadow: "card",
                        border: "1px solid",
                        borderColor: "smoke",
                    }}
                >
                    <Heading as="h2" sx={{mb: 4, fontSize: [3, 4], color: "black"}}>
                        Frequently Asked Questions
                    </Heading>
                    <Grid columns={[1, 2]} gap={4} sx={{textAlign: "left"}}>
                        {faqs.map((faq, index) => (
                            <Box
                                key={index}
                                sx={{
                                    p: 4,
                                    bg: "smoke",
                                    borderRadius: "default",
                                    border: "1px solid",
                                    borderColor: "muted",
                                }}
                            >
                                <Heading as="h3" sx={{mb: 2, fontSize: 2, color: "primary"}}>
                                    {faq.question}
                                </Heading>
                                <Text sx={{color: "black", lineHeight: 1.6}}>{faq.answer}</Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Footer/>
        </>
    )
}
