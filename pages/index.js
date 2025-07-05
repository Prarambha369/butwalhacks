import Head from 'next/head'
import { Box, Button, Heading, Text, Flex } from 'theme-ui'
import Image from 'next/image'
import DecorativeShapes from '../components/DecorativeShapes'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>HackClub Butwal Site</title>
        <meta name="description" content="Club Lead by Students for Students" />
      </Head>
      <Box sx={{
        minHeight: '100vh',
        bg: 'linear-gradient(135deg, #181B2A 0%, #232946 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative background shapes */}
        <DecorativeShapes />

        {/* Main content */}
        <Box
          sx={{
            width: 160,
            maxWidth: '60vw',
            mb: 4,
            borderRadius: 32,
            boxShadow: '0 8px 32px rgba(30,80,160,0.15)',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            mx: 'auto',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Image
            src="/bin/logo/rlogo.svg"
            alt="HackClub Butwal Logo"
            width={160}
            height={160}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Box>
        <Heading
          as="h1"
          sx={{
            fontSize: [5, 6],
            mb: 3,
            letterSpacing: '-0.03em',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 2px 16px #1E50A0',
            textAlign: 'center',
            lineHeight: '1.2',
            position: 'relative',
            zIndex: 1,
          }}
        >
          HackClub Butwal
        </Heading>
        <Text
          sx={{
            fontSize: [2, 3],
            mb: 4,
            opacity: 0.95,
            maxWidth: 500,
            mx: 'auto',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1.5',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Club Lead by Students for Students<br />
          We’re building something amazing for young coders and tech enthusiasts in Butwal.<br />
          Our website is launching soon. Stay tuned!
        </Text>
        <Flex sx={{ justifyContent: 'center', mb: 4, position: 'relative', zIndex: 1 }}>
          <Link href="/form" passHref legacyBehavior>
            <Button
              sx={{
                px: 4,
                py: 2,
                bg: '#ec3750',
                color: 'white',
                borderRadius: 8,
                boxShadow: '0 4px 12px rgba(236, 55, 80, 0.4)',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
                fontWeight: 'bold',
                fontSize: [2, 3],
                opacity: 1, // Ensure button is not transparent
                '&:hover': { bg: '#d53145', transform: 'scale(1.05)' },
              }}
            >
              Join The Club
            </Button>
          </Link>
        </Flex>
        <Text sx={{ fontSize: 1, opacity: 0.7, position: 'relative', zIndex: 1 }}>
          © {new Date().getFullYear()} HackClub Butwal
        </Text>
      </Box>
    </>
  )
}
