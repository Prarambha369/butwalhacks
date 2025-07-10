/** @jsxImportSource theme-ui */
import Head from 'next/head'
import { Box } from 'theme-ui'

export default function Form() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Want to be Part of HackClub Butwal</title>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
        }}
      >
        <iframe 
          data-tally-src="https://tally.so/r/mO9a6K?transparentBackground=1" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0" 
          title="Want to be Part of HackClub Butwal"
          sx={{
            border: 0,
            display: 'block',
          }}
        />
      </Box>
    </>
  )
}
