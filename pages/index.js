import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Heading, Text, Flex, useColorMode } from 'theme-ui'

import DecorativeShapes from '../components/DecorativeShapes'

export default function Home() {
  const [colorMode] = useColorMode()

  return (
    <div className="no-drag-select">
      <Head>
        <title>HackClub Butwal</title>
        <meta
          name="description"
          content="HackClub Butwal: Local Club in the corner of Butwal."
        />
        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/favicon/favicon.ico"
          type="image/x-icon"
        />
      </Head>

     <Box
  sx={{
    minHeight: '100vh',
    bg: 'background', // uses the theme-defined background
    color: 'text',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: 3,
    position: 'relative',
    overflow: 'hidden',
  }}
>

        <DecorativeShapes />

        {/* Logo at top */}
        <Box sx={{ mb: 4, zIndex: 1 }}>
          <Image
            src="/bin/logo/rlogo.svg"
            alt="HackClub Butwal Logo"
            width={150}
            height={150}
            priority
          />
        </Box>

        <Heading
          as="h1"
          sx={{
            fontSize: [5, 6],
            mb: 3,
            zIndex: 1,
            color: 'white',
          }}
        >
          HackClub Butwal
        </Heading>

        <Text
          sx={{
            fontSize: [2, 3],
            zIndex: 1,
            color: 'white',
          }}
        >
          We’re building something amazing for young coders and techies in Butwal.
          <br />
          Our website is launching soon. Stay tuned!
        </Text>

        <Flex sx={{ justifyContent: 'center', mb: 4, position: 'relative', zIndex: 1 }}>
          <Link href="/form" passHref legacyBehavior>
            <Button
              sx={{
                px: 4,
                py: 2,
                bg: '#ec3750',
                color: colorMode === 'dark' ? 'white' : 'black',
                borderRadius: 8,
                boxShadow: '0 4px 12px rgba(236, 55, 80, 0.4)',
                transition: 'all 0.2s',
                letterSpacing: '0.01em',
                '&:hover': { bg: '#d53145', transform: 'scale(1.05)' },
              }}
            >
              Join The Club
            </Button>
          </Link>
        </Flex>

        <Text
          sx={{
            fontSize: 1,
            opacity: 0.7,
            position: 'relative',
            zIndex: 1,
            color: 'white',
          }}
        >
          © {new Date().getFullYear()} HackClub Butwal
        </Text>
      </Box>
    </div>
  )
}
