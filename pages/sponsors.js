import React from 'react'
import Head from 'next/head'
import {Container, Box, Heading, Text, Grid, Flex, Button, Spinner} from 'theme-ui'
import SponsorCard from '../components/SponsorCard'
import {useSponsors, groupSponsorsByTier} from '../lib/airtable'
import BinNav from '../components/bin/nav'

export default function Sponsors() {
    const {sponsors, isLoading, error} = useSponsors()
    const sponsorsByTier = groupSponsorsByTier(sponsors)

    // Define tier-specific styles for section headers
    const tierHeaderStyles = {
        Platinum: {
            bg: 'linear-gradient(135deg, #E5E4E2 0%, #F8F8FF 100%)',
            color: '#333333',
            borderColor: '#E5E4E2'
        },
        Gold: {
            bg: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 100%)',
            color: '#333333',
            borderColor: '#FFD700'
        },
        Silver: {
            bg: 'linear-gradient(135deg, #C0C0C0 0%, #F5F5F5 100%)',
            color: '#333333',
            borderColor: '#C0C0C0'
        },
        Bronze: {
            bg: 'linear-gradient(135deg, #CD7F32 0%, #F4A460 100%)',
            color: '#FFFFFF',
            borderColor: '#CD7F32'
        }
    }

    return (
        <>
            <Head>
                <title>Sponsors – HackClub Butwal</title>
                <meta name="description"
                      content="Meet the generous sponsors who make HackClub Butwal possible and learn how your organization can support us."/>
                <meta property="og:title" content="Sponsors - HackClub Butwal"/>
                <meta property="og:description"
                      content="Discover the organizations that support our mission to empower young developers in Butwal, Nepal."/>
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
                        Our Sponsors
                    </Heading>
                    <Text sx={{fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9}}>
                        Meet the amazing organizations that support HackClub Butwal and help us empower the next
                        generation of coders and makers.
                    </Text>
                </Container>
            </Box>

            <Container sx={{py: [4, 5]}}>
                {/* Why Sponsor Section */}
                <Box sx={{mb: 6, textAlign: 'center'}}>
                    <Heading as="h2" sx={{mb: 4, fontSize: 4}}>Why Sponsor Us?</Heading>
                    <Text sx={{
                        fontSize: [2, 3],
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.6,
                        mb: 4
                    }}>
                        By sponsoring HackClub Butwal, you're investing in the future of technology in Nepal. Your
                        support helps us provide resources, organize events, and create opportunities for young people
                        to learn and grow in tech.
                    </Text>
                </Box>

                {isLoading ? (
                    <Flex sx={{justifyContent: 'center', py: 5}}>
                        <Spinner size={48}/>
                        <Text sx={{ml: 3}}>Loading sponsors...</Text>
                    </Flex>
                ) : error ? (
                    <Box sx={{textAlign: 'center', py: 4}}>
                        <Text sx={{color: 'secondary', mb: 2}}>{error}</Text>
                        <Text>Showing fallback data instead.</Text>
                    </Box>
                ) : (
                    <>
                        {sponsorsByTier.map(({tier, sponsors}) => (
                            <Box key={tier} sx={{mb: 6}}>
                                <Box
                                    sx={{
                                        p: 4,
                                        mb: 4,
                                        borderRadius: 'default',
                                        textAlign: 'center',
                                        border: '2px solid',
                                        ...tierHeaderStyles[tier],
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: tierHeaderStyles[tier].bg,
                                            opacity: 0.1,
                                            zIndex: 0
                                        }
                                    }}
                                >
                                    <Heading
                                        as="h2"
                                        sx={{
                                            fontSize: [3, 4],
                                            position: 'relative',
                                            zIndex: 1,
                                            textShadow: tier === 'Bronze' ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                                        }}
                                    >
                                        {tier} Sponsors
                                    </Heading>
                                    <Text sx={{
                                        fontSize: 1,
                                        opacity: 0.8,
                                        position: 'relative',
                                        zIndex: 1
                                    }}>
                                        {sponsors.length} sponsor{sponsors.length !== 1 ? 's' : ''} in this tier
                                    </Text>
                                </Box>

                                <Grid columns={[1, null, 2]} gap={4}>
                                    {sponsors.map(sponsor => (
                                        <SponsorCard key={sponsor.id} sponsor={sponsor}/>
                                    ))}
                                </Grid>
                            </Box>
                        ))}
                    </>
                )}

                {/* Become a Sponsor Section */}
                <Box sx={{
                    bg: 'muted',
                    p: [4, 5],
                    borderRadius: 'default',
                    textAlign: 'center',
                    mb: 6
                }}>
                    <Heading as="h2" sx={{mb: 3, fontSize: 3}}>Become a Sponsor</Heading>
                    <Text sx={{mb: 4, maxWidth: '600px', mx: 'auto'}}>
                        Interested in supporting HackClub Butwal? We offer various sponsorship tiers with different
                        benefits. Get in touch to learn more about how your organization can make a difference.
                    </Text>

                    <Flex sx={{justifyContent: 'center', gap: 3, flexWrap: 'wrap'}}>
                        <Button as="a" href="/contact" variant="primary">
                            Contact Us About Sponsorship
                        </Button>
                        <Button
                            as="a"
                            href="mailto:sponsors@hackclubbutwal.com"
                            variant="outline"
                            sx={{bg: 'background'}}
                        >
                            Email Sponsors Team
                        </Button>
                    </Flex>
                </Box>

                {/* Sponsorship Benefits */}
                <Box sx={{mb: 6}}>
                    <Heading as="h2" sx={{mb: 4, textAlign: 'center', fontSize: 4}}>Sponsorship Benefits</Heading>
                    <Grid columns={[1, 2, 4]} gap={4}>
                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center',
                            border: '2px solid',
                            borderColor: 'primary',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <Box sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                bg: 'primary',
                                mx: 'auto',
                                mb: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 3,
                                color: 'white'
                            }}>
                                👁️
                            </Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Brand Visibility</Heading>
                            <Text sx={{fontSize: 1}}>
                                Your logo on our website, event materials, and promotional content reaching hundreds of
                                students.
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center',
                            border: '2px solid',
                            borderColor: 'secondary',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <Box sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                bg: 'secondary',
                                mx: 'auto',
                                mb: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 3,
                                color: 'white'
                            }}>
                                🎯
                            </Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Talent Access</Heading>
                            <Text sx={{fontSize: 1}}>
                                Connect with motivated students and potential future employees through our events and
                                community.
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center',
                            border: '2px solid',
                            borderColor: 'accent',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <Box sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                bg: 'accent',
                                mx: 'auto',
                                mb: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 3,
                                color: 'white'
                            }}>
                                💝
                            </Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Community Impact</Heading>
                            <Text sx={{fontSize: 1}}>
                                Make a meaningful difference in tech education and youth development in Butwal.
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 4,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center',
                            border: '2px solid',
                            borderColor: 'highlight',
                            transition: 'transform 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-5px)'
                            }
                        }}>
                            <Box sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                bg: 'highlight',
                                mx: 'auto',
                                mb: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 3,
                                color: 'white'
                            }}>
                                🤝
                            </Box>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Event Participation</Heading>
                            <Text sx={{fontSize: 1}}>
                                Opportunities to present, judge, or mentor at our workshops and hackathons.
                            </Text>
                        </Box>
                    </Grid>
                </Box>

                {/* Sponsorship Tiers */}
                <Box sx={{
                    textAlign: 'center',
                    p: 4,
                    bg: 'background',
                    borderRadius: 'default',
                    boxShadow: 'card'
                }}>
                    <Heading as="h2" sx={{mb: 4, fontSize: 3}}>Sponsorship Tiers</Heading>
                    <Grid columns={[1, 2, 4]} gap={4}>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            border: '3px solid #E5E4E2',
                            bg: 'linear-gradient(135deg, #E5E4E2 0%, #F8F8FF 100%)',
                            color: '#333'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Platinum</Heading>
                            <Text sx={{fontSize: 4, fontWeight: 'bold', mb: 2}}>$1000+</Text>
                            <Text sx={{fontSize: 1}}>
                                Premium logo placement, speaking opportunities, and exclusive networking events.
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            border: '3px solid #FFD700',
                            bg: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 100%)',
                            color: '#333'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Gold</Heading>
                            <Text sx={{fontSize: 4, fontWeight: 'bold', mb: 2}}>$500+</Text>
                            <Text sx={{fontSize: 1}}>
                                Logo on website and materials, workshop sponsorship opportunities.
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            border: '3px solid #C0C0C0',
                            bg: 'linear-gradient(135deg, #C0C0C0 0%, #F5F5F5 100%)',
                            color: '#333'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Silver</Heading>
                            <Text sx={{fontSize: 4, fontWeight: 'bold', mb: 2}}>$250+</Text>
                            <Text sx={{fontSize: 1}}>
                                Website logo placement and social media mentions.
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            border: '3px solid #CD7F32',
                            bg: 'linear-gradient(135deg, #CD7F32 0%, #F4A460 100%)',
                            color: 'white'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2}}>Bronze</Heading>
                            <Text sx={{fontSize: 4, fontWeight: 'bold', mb: 2}}>$100+</Text>
                            <Text sx={{fontSize: 1}}>
                                Website listing and community recognition.
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}