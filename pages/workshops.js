import {useState} from 'react'
import Head from 'next/head'
import {Container, Box, Heading, Text, Grid, Flex, Button, Spinner, Badge} from 'theme-ui'
import EventCard from '../components/EventCard'
import BinNav from '../components/bin/nav'

// Demo static data for events
const demoEvents = [
    {
        title: 'Intro to JavaScript',
        date: '2025-08-01',
        tags: ['Beginner', 'JavaScript'],
        description: 'A fun intro to JS.',
        location: 'Butwal',
        link: '#'
    },
    {
        title: 'Hackathon',
        date: '2025-09-10',
        tags: ['Hackathon'],
        description: '24-hour coding event.',
        location: 'Butwal',
        link: '#'
    }
]

export default function Workshops() {
    const events = demoEvents
    const isLoading = false
    const error = null
    const [filter, setFilter] = useState('all')

    // Get unique tags from all events
    const allTags = events.reduce((tags, event) => {
        if (event.tags) {
            event.tags.forEach(tag => {
                if (!tags.includes(tag)) {
                    tags.push(tag)
                }
            })
        }
        return tags
    }, [])

    // Filter events based on selected tag
    const filteredEvents = filter === 'all'
        ? events
        : events.filter(event => event.tags && event.tags.includes(filter))

    // Separate upcoming and past events
    const now = new Date()
    const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= now)
    const pastEvents = filteredEvents.filter(event => new Date(event.date) < now)

    return (
        <>
            <Head>
                <title>Workshops & Events – HackClub Butwal</title>
                <meta name="description"
                      content="Join our upcoming workshops and events at HackClub Butwal. Learn coding, design, and more!"/>
                <meta property="og:title" content="Workshops & Events - HackClub Butwal"/>
                <meta property="og:description"
                      content="Discover hands-on workshops and community events in Butwal. From beginner-friendly coding sessions to advanced hackathons."/>
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
                        Workshops & Events
                    </Heading>
                    <Text sx={{fontSize: [1, 2], maxWidth: '600px', mx: 'auto', opacity: 0.9}}>
                        Join our hands-on workshops and community events to learn new skills, build projects, and
                        connect with fellow coders in Butwal.
                    </Text>
                </Container>
            </Box>

            <Container sx={{py: [4, 5]}}>
                {/* Filter buttons */}
                <Box sx={{mb: 4}}>
                    <Heading as="h2" sx={{mb: 3, textAlign: 'center'}}>Filter by Category</Heading>
                    <Flex
                        sx={{
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 2
                        }}
                    >
                        <Button
                            variant={filter === 'all' ? 'primary' : 'outline'}
                            onClick={() => setFilter('all')}
                            sx={{mb: 2}}
                        >
                            All Events ({filteredEvents.length})
                        </Button>

                        {allTags.map(tag => {
                            const tagCount = events.filter(event => event.tags && event.tags.includes(tag)).length
                            return (
                                <Button
                                    key={tag}
                                    variant={filter === tag ? 'primary' : 'outline'}
                                    onClick={() => setFilter(tag)}
                                    sx={{mb: 2}}
                                >
                                    {tag} ({tagCount})
                                </Button>
                            )
                        })}
                    </Flex>
                </Box>

                {isLoading ? (
                    <Flex sx={{justifyContent: 'center', py: 5}}>
                        <Spinner size={48}/>
                        <Text sx={{ml: 3}}>Loading events...</Text>
                    </Flex>
                ) : error ? (
                    <Box sx={{textAlign: 'center', py: 4}}>
                        <Text sx={{color: 'secondary', mb: 2}}>{error}</Text>
                        <Text>Showing fallback data instead.</Text>
                    </Box>
                ) : (
                    <>
                        {/* Upcoming Events */}
                        {upcomingEvents.length > 0 && (
                            <Box sx={{mb: 5}}>
                                <Flex sx={{alignItems: 'center', mb: 3}}>
                                    <Heading as="h2" sx={{fontSize: 4, mr: 3}}>Upcoming Events</Heading>
                                    <Badge variant="primary" sx={{px: 2, py: 1}}>
                                        {upcomingEvents.length} event{upcomingEvents.length !== 1 ? 's' : ''}
                                    </Badge>
                                </Flex>
                                <Grid columns={[1, null, 2, 3]} gap={4}>
                                    {upcomingEvents.map(event => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                                </Grid>
                            </Box>
                        )}

                        {/* Past Events */}
                        {pastEvents.length > 0 && (
                            <Box sx={{mb: 5}}>
                                <Flex sx={{alignItems: 'center', mb: 3}}>
                                    <Heading as="h2" sx={{fontSize: 4, mr: 3}}>Past Events</Heading>
                                    <Badge variant="outline" sx={{px: 2, py: 1}}>
                                        {pastEvents.length} event{pastEvents.length !== 1 ? 's' : ''}
                                    </Badge>
                                </Flex>
                                <Grid columns={[1, null, 2, 3]} gap={4}>
                                    {pastEvents.map(event => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                                </Grid>
                            </Box>
                        )}

                        {/* No events found */}
                        {filteredEvents.length === 0 && (
                            <Box sx={{textAlign: 'center', py: 5}}>
                                <Heading as="h3" sx={{mb: 3}}>No events found</Heading>
                                <Text sx={{mb: 3}}>
                                    No events match the selected filter. Try selecting a different category.
                                </Text>
                                <Button
                                    variant="outline"
                                    onClick={() => setFilter('all')}
                                >
                                    Show all events
                                </Button>
                            </Box>
                        )}
                    </>
                )}

                {/* Call to Action Section */}
                <Box sx={{
                    textAlign: 'center',
                    mt: 6,
                    p: 4,
                    bg: 'muted',
                    borderRadius: 'default'
                }}>
                    <Heading as="h2" sx={{mb: 3, fontSize: 3}}>Want to suggest a workshop?</Heading>
                    <Text sx={{mb: 3, maxWidth: '600px', mx: 'auto'}}>
                        Have an idea for a workshop or want to lead one yourself? We're always looking for new topics
                        and speakers!
                        Whether you're an expert in a particular technology or just passionate about sharing knowledge,
                        we'd love to hear from you.
                    </Text>
                    <Flex sx={{justifyContent: 'center', gap: 3, flexWrap: 'wrap'}}>
                        <Button as="a" href="/contact" variant="primary">
                            Suggest a Workshop
                        </Button>
                        <Button as="a" href="/contact" variant="outline">
                            Become a Speaker
                        </Button>
                    </Flex>
                </Box>

                {/* Workshop Guidelines */}
                <Box sx={{mt: 5}}>
                    <Heading as="h2" sx={{mb: 3, textAlign: 'center'}}>Workshop Guidelines</Heading>
                    <Grid columns={[1, 2, 3]} gap={4}>
                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Beginner Friendly</Heading>
                            <Text sx={{fontSize: 1}}>
                                All our workshops are designed to be accessible to beginners. No prior experience
                                required!
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Hands-on Learning</Heading>
                            <Text sx={{fontSize: 1}}>
                                We believe in learning by doing. Bring your laptop and get ready to code!
                            </Text>
                        </Box>

                        <Box sx={{
                            p: 3,
                            borderRadius: 'default',
                            bg: 'background',
                            boxShadow: 'card',
                            textAlign: 'center'
                        }}>
                            <Heading as="h3" sx={{mb: 2, fontSize: 2, color: 'primary'}}>Community Driven</Heading>
                            <Text sx={{fontSize: 1}}>
                                Our workshops are led by community members who are passionate about sharing knowledge.
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}