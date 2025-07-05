import Meta from '@hackclub/meta'




import '@hackclub/theme/fonts/reg-bold.css'


import { ThemeProvider } from 'theme-ui'


import theme from '../lib/theme'


import Script from 'next/script'


import Head from 'next/head'




export default function App({ Component, pageProps }) {


  return (


    <>


      <Head>
        <link rel="icon" href="public/assets/favicon/favicon.io" type="image/x-icon" />
      </Head>


      <Meta


        name="HackClub Butwal"


        title="HackClub Butwal – Club Lead by Students for Students"


        description="Join HackClub Butwal,We host hands-on workshops, tech events, seminars, and maybe hackathons too if we get the love and support!"


        color="#ec3750"


        image="public/bin/logo/rlogo.svg"


        url="https://butwal.hackclub.com"


        instagram="@HackClubButwal"


      />


      <Script


        src="https://cdn.usefathom.com/script.js"


        data-site="NXBJA2"


        strategy="afterInteractive"


      />

      <ThemeProvider theme={theme}>



        <Component {...pageProps} />


      </ThemeProvider>


    </>
  )
}