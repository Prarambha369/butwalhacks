import React from 'react'
import Head from 'next/head'
import {Container, Box, Heading, Text, Grid, Flex, Button, Spinner} from 'theme-ui'
import MemberCard from '../components/MemberCard'
import {useTeamMembers} from '../lib/airtable'
import BinNav from '../components/bin/nav'

export default function Community() {
    const {members, isLoading, error} = useTeamMembers()

    return (
        <>
            <Head>
                <title>Community – HackClub Butwal</title>
                <meta name="description"
                      content="Meet the team behind HackClub Butwal and learn how to get involved in our community."/>
                <meta property="og:title" content="Community - HackClub Butwal"/>
                <meta property="og:description"
                      content="Discover the passionate individuals who make HackClub Butwal a vibrant coding community in Nepal."/>
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
                        Our Community
                    </Heading>
                    <Text sx={{fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9}}>
                        Meet the passionate team behind HackClub Butwal who are dedicated to fostering a vibrant coding
                        community in Butwal.
                    </Text>
                </Container>
            </Box>

            <Container sx={{py: [4, 5]}}>
                {/* Mission Section */}
                <Box sx={{mb: 6, textAlign: 'center'}}>
                    <Heading as="h2" sx={{mb: 4, fontSize: 4}}>Our Mission</Heading>
                    <Text sx={{
                        fontSize: [2, 3],
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.6,
                        mb: 4
                    }}>
                        HackClub Butwal is on a mission to empower students with the skills, community, and support they
                        need to become the next generation of technology leaders and innovators.
                    </Text>
                    <Grid columns={[1, 3]} gap={4} sx={{maxWidth: '800px', mx: 'auto'}}>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'muted',
                            textAlign: 'center'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Learn by Doing</Heading>
                            <Text sx={{fontSize: 1}}>
                                We believe in hands-on learning through real projects and collaborative coding.
                            </Text>
                        </Box>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'muted',
                            textAlign: 'center'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Peer Mentorship</Heading>
                            <Text sx={{fontSize: 1}}>
                                Students teaching students creates a supportive and relatable learning environment.
                            </Text>
                        </Box>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'muted',
                            textAlign: 'center'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Inclusive Community</Heading>
                            <Text sx={{fontSize: 1}}>
                                We create an environment where everyone can thrive, regardless of background or
                                experience.
                            </Text>
                        </Box>
                    </Grid>
                </Box>

                {/* Team Section */}
                <Heading as="h2" sx={{mb: 4, textAlign: 'center', fontSize: 4}}>Meet The Team</Heading>

                {isLoading ? (
                    <Flex sx={{justifyContent: 'center', py: 5}}>
                        <Spinner size={48}/>
                        <Text sx={{ml: 3}}>Loading team members...</Text>
                    </Flex>
                ) : error ? (
                    <Box sx={{textAlign: 'center', py: 4}}>
                        <Text sx={{color: 'secondary', mb: 2}}>{error}</Text>
                        <Text>Showing fallback data instead.</Text>
                    </Box>
                ) : (
                    <Grid columns={[1, null, 2, 3]} gap={4} sx={{mb: 6}}>
                        {members.map(member => (
                            <MemberCard key={member.id} member={member}/>
                        ))}
                    </Grid>
                )}

                {/* Join Community Section */}
                <Box sx={{
                    bg: 'muted',
                    p: [4, 5],
                    borderRadius: 'default',
                    textAlign: 'center',
                    mb: 6
                }}>
                    <Heading as="h2" sx={{mb: 3, fontSize: 3}}>Join Our Community</Heading>
                    <Text sx={{mb: 4, maxWidth: '600px', mx: 'auto'}}>
                        We're always looking for passionate individuals to join our community. Whether you're a beginner
                        or an experienced coder, there's a place for you at HackClub Butwal.
                    </Text>

                    <Grid columns={[1, 2, 4]} gap={3} sx={{mb: 4}}>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Students</Heading>
                            <Text sx={{fontSize: 1}}>
                                Join workshops, build projects, and learn with peers.
                            </Text>
                        </Box>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Mentors</Heading>
                            <Text sx={{fontSize: 1}}>
                                Share your knowledge and help guide the next generation.
                            </Text>
                        </Box>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Speakers</Heading>
                            <Text sx={{fontSize: 1}}>
                                Lead workshops and share your expertise with the community.
                            </Text>
                        </Box>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Organizers</Heading>
                            <Text sx={{fontSize: 1}}>
                                Help plan events and grow the community in Butwal.
                            </Text>
                        </Box>
                    </Grid>

                    <Flex
                        sx={{
                            justifyContent: 'center',
                            gap: 3,
                            flexWrap: 'wrap'
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
                            sx={{bg: 'background'}}
                        >
                            Join Hack Club Slack
                        </Button>
                    </Flex>
                </Box>

                {/* Testimonials Section */}
                <Box sx={{mb: 6}}>
                    <Heading as="h2" sx={{mb: 4, textAlign: 'center', fontSize: 4}}>What Our Members Say</Heading>
                    <Grid columns={[1, 2]} gap={4}>
                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            borderLeft: '4px solid',
                            borderColor: 'primary',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Text sx={{fontStyle: 'italic', mb: 3, fontSize: 2}}>
                                "Joining HackClub Butwal was one of the best decisions I made. I've learned so much and
                                made amazing friends who share my passion for coding."
                            </Text>
                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bg: 'primary',
                                    mr: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    A
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold'}}>Anisha Poudel</Text>
                                    <Text sx={{fontSize: 1, color: 'muted'}}>Member since 2023</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            borderLeft: '4px solid',
                            borderColor: 'secondary',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Text sx={{fontStyle: 'italic', mb: 3, fontSize: 2}}>
                                "The workshops and mentorship at HackClub Butwal helped me build my first web
                                application. The supportive community makes learning fun and engaging."
                            </Text>
                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bg: 'secondary',
                                    mr: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    R
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold'}}>Rohan Sharma</Text>
                                    <Text sx={{fontSize: 1, color: 'muted'}}>Member since 2023</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            borderLeft: '4px solid',
                            borderColor: 'accent',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Text sx={{fontStyle: 'italic', mb: 3, fontSize: 2}}>
                                "As a mentor, I love seeing students grow from complete beginners to confident
                                developers. The energy here is infectious!"
                            </Text>
                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bg: 'accent',
                                    mr: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    S
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold'}}>Sita Thapa</Text>
                                    <Text sx={{fontSize: 1, color: 'muted'}}>Mentor & Speaker</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            borderLeft: '4px solid',
                            borderColor: 'highlight',
                            bg: 'background',
                            boxShadow: 'card'
                        }}>
                            <Text sx={{fontStyle: 'italic', mb: 3, fontSize: 2}}>
                                "HackClub Butwal connected me with like-minded people in my city. We've collaborated on
                                several projects and even started a tech startup together!"
                            </Text>
                            <Flex sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bg: 'highlight',
                                    mr: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    K
                                </Box>
                                <Box>
                                    <Text sx={{fontWeight: 'bold'}}>Krishna Adhikari</Text>
                                    <Text sx={{fontSize: 1, color: 'muted'}}>Alumni & Entrepreneur</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Grid>
                </Box>

                {/* Community Stats */}
                <Box sx={{
                    textAlign: 'center',
                    p: 4,
                    bg: 'background',
                    borderRadius: 'default',
                    boxShadow: 'card'
                }}>
                    <Heading as="h2" sx={{mb: 4, fontSize: 3}}>Community Impact</Heading>
                    <Grid columns={[2, 4]} gap={4}>
                        <Box>
                            <Heading as="h3" sx={{fontSize: 5, color: 'primary', mb: 1}}>50+</Heading>
                            <Text sx={{fontSize: 1}}>Active Members</Text>
                        </Box>
                        <Box>
                            <Heading as="h3" sx={{fontSize: 5, color: 'secondary', mb: 1}}>25+</Heading>
                            <Text sx={{fontSize: 1}}>Workshops Conducted</Text>
                        </Box>
                        <Box>
                            <Heading as="h3" sx={{fontSize: 5, color: 'accent', mb: 1}}>100+</Heading>
                            <Text sx={{fontSize: 1}}>Projects Built</Text>
                        </Box>
                        <Box>
                            <Heading as="h3" sx={{fontSize: 5, color: 'highlight', mb: 1}}>5+</Heading>
                            <Text sx={{fontSize: 1}}>Hackathons Organized</Text>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}