import {useState, useEffect} from 'react'
import Head from 'next/head'
import {Container, Box, Heading, Text, Card, Grid, Link, Flex, Button} from 'theme-ui'
import {useRouter} from 'next/router'
import Icon from '@hackclub/icons'
import BinNav from '../components/bin/nav'

export default function Contact() {
    const router = useRouter()
    const [formUrl, setFormUrl] = useState('')
    const [isFormLoading, setIsFormLoading] = useState(true)

    // Handle query parameters for the Tally form
    useEffect(() => {
        if (!router.isReady) return

        // Get query parameters
        const {origin, ref, email} = router.query

        // Base Tally form URL - replace with your actual form ID
        const baseUrl = "https://tally.so/embed/w2Jb9E"

        // Build query parameters for Tally
        const params = new URLSearchParams()
        params.append('alignLeft', '1')
        params.append('hideTitle', '1')
        params.append('transparentBackground', '1')

        // Add any passed parameters as hidden fields
        if (origin) params.append('origin', origin)
        if (ref) params.append('ref', ref)
        if (email) params.append('email', email)

        // Set the complete URL
        setFormUrl(`${baseUrl}?${params.toString()}`)

    }, [router.isReady, router.query])

    // Handle iframe load event
    const handleIframeLoad = () => {
        setIsFormLoading(false)
    }

    return (
        <>
            <Head>
                <title>Contact – HackClub Butwal</title>
                <meta name="description"
                      content="Get in touch with HackClub Butwal via our contact form or reach out through social media."/>
                <meta property="og:title" content="Contact HackClub Butwal"/>
                <meta property="og:description"
                      content="Connect with the HackClub Butwal community. We'd love to hear from you!"/>
            </Head>

            <BinNav/>

            <Box
                sx={{
                    bg: 'primary',
                    color: 'white',
                    py: [4, 5],
                    textAlign: 'center'
                }}
            >
                <Container>
                    <Heading
                        as="h1"
                        sx={{
                            fontSize: [4, 5, 6],
                            mb: 3
                        }}
                    >
                        Get In Touch
                    </Heading>
                    <Text sx={{fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9}}>
                        Have questions about our workshops? Want to join our community? We'd love to hear from you!
                    </Text>
                </Container>
            </Box>

            <Container sx={{py: [4, 5], px: [3, 4]}}>
                <Grid columns={[1, null, 2]} gap={4} sx={{mb: 5}}>
                    <Card sx={{
                        p: 4,
                        borderRadius: 'default',
                        boxShadow: 'card',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}>
                        <Heading as="h2" sx={{mb: 3, fontSize: 3}}>Send us a Message</Heading>
                        <Text sx={{mb: 3}}>
                            Have a question or want to get involved? Fill out this form and we'll get back to you as
                            soon as possible.
                        </Text>

                        <Box sx={{
                            position: 'relative',
                            flex: 1,
                            minHeight: '500px',
                            border: '1px solid',
                            borderColor: 'muted',
                            borderRadius: 'default',
                            overflow: 'hidden'
                        }}>
                            {isFormLoading && (
                                <Flex
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bg: 'background',
                                        zIndex: 1
                                    }}
                                >
                                    <Text>Loading contact form...</Text>
                                </Flex>
                            )}

                            {formUrl && (
                                <iframe
                                    src={formUrl}
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    title="Contact Form"
                                    onLoad={handleIframeLoad}
                                />
                            )}
                        </Box>
                    </Card>

                    <Card sx={{
                        p: 4,
                        borderRadius: 'default',
                        boxShadow: 'card'
                    }}>
                        <Heading as="h2" sx={{mb: 3, fontSize: 3}}>Connect With Us</Heading>

                        <Grid gap={3} sx={{mb: 4}}>
                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{mr: 3, color: 'primary'}}>
                                    <Icon glyph="mail" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold', mb: 1}}>Email</Text>
                                    <Link
                                        href="mailto:hello@hackclubbutwal.com"
                                        sx={{
                                            color: 'text',
                                            textDecoration: 'none',
                                            '&:hover': {color: 'primary'},
                                            transition: 'color 0.2s ease'
                                        }}
                                    >
                                        hello@hackclubbutwal.com
                                    </Link>
                                </Box>
                            </Flex>

                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{mr: 3, color: 'primary'}}>
                                    <Icon glyph="instagram" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold', mb: 1}}>Instagram</Text>
                                    <Link
                                        href="https://instagram.com/HackClubButwal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'text',
                                            textDecoration: 'none',
                                            '&:hover': {color: 'primary'},
                                            transition: 'color 0.2s ease'
                                        }}
                                    >
                                        @HackClubButwal
                                    </Link>
                                </Box>
                            </Flex>

                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{mr: 3, color: 'primary'}}>
                                    <Icon glyph="github" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold', mb: 1}}>GitHub</Text>
                                    <Link
                                        href="https://github.com/HackClub-Butwal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'text',
                                            textDecoration: 'none',
                                            '&:hover': {color: 'primary'},
                                            transition: 'color 0.2s ease'
                                        }}
                                    >
                                        HackClub-Butwal
                                    </Link>
                                </Box>
                            </Flex>

                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{mr: 3, color: 'primary'}}>
                                    <Icon glyph="location" size={24}/>
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold', mb: 1}}>Location</Text>
                                    <Text sx={{color: 'text'}}>
                                        Butwal, Nepal
                                    </Text>
                                </Box>
                            </Flex>
                        </Grid>

                        <Box sx={{mb: 4}}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Join Our Community</Heading>
                            <Text sx={{mb: 3}}>
                                We host regular meetups and workshops in Butwal. Follow us on social media to stay
                                updated on our next event.
                            </Text>

                            <Button
                                as="a"
                                href="https://hackclub.com/slack"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    mb: 2
                                }}
                            >
                                Join Hack Club Slack <Icon glyph="external-link" size={20} style={{marginLeft: '8px'}}/>
                            </Button>

                            <Button
                                as="a"
                                href="https://discord.gg/butwalhacks"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%'
                                }}
                            >
                                Join Our Discord <Icon glyph="external-link" size={20} style={{marginLeft: '8px'}}/>
                            </Button>
                        </Box>

                        <Box sx={{
                            p: 3,
                            bg: 'muted',
                            borderRadius: 'default',
                            textAlign: 'center'
                        }}>
                            <Heading as="h4" sx={{mb: 2, fontSize: 1}}>Office Hours</Heading>
                            <Text sx={{fontSize: 1}}>
                                We're available for questions and support:<br/>
                                <strong>Weekdays:</strong> 4:00 PM - 8:00 PM<br/>
                                <strong>Weekends:</strong> 10:00 AM - 6:00 PM
                            </Text>
                        </Box>
                    </Card>
                </Grid>

                <Box sx={{
                    textAlign: 'center',
                    p: 4,
                    bg: 'background',
                    borderRadius: 'default',
                    boxShadow: 'card'
                }}>
                    <Heading as="h2" sx={{mb: 3, fontSize: 3}}>Frequently Asked Questions</Heading>
                    <Grid columns={[1, 2]} gap={4}>
                        <Box sx={{textAlign: 'left'}}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>How can I join HackClub Butwal?</Heading>
                            <Text sx={{mb: 3}}>
                                Simply fill out our contact form above or join our Discord/Slack community. We welcome
                                all skill levels!
                            </Text>
                        </Box>

                        <Box sx={{textAlign: 'left'}}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Do I need programming experience?</Heading>
                            <Text sx={{mb: 3}}>
                                Not at all! We have workshops for complete beginners as well as advanced developers.
                                Everyone is welcome.
                            </Text>
                        </Box>

                        <Box sx={{textAlign: 'left'}}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Are your events free?</Heading>
                            <Text sx={{mb: 3}}>
                                Yes! All our workshops, meetups, and events are completely free for participants.
                            </Text>
                        </Box>

                        <Box sx={{textAlign: 'left'}}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>How often do you organize events?</Heading>
                            <Text sx={{mb: 3}}>
                                We typically host 2-3 events per month, including workshops, hackathons, and community
                                meetups.
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
