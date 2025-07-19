import "@hackclub/theme/fonts/reg-bold.css";
import Meta from "@hackclub/meta";
import { ThemeProvider, useColorMode, Container } from "theme-ui";
import theme from "../lib/theme";
import Script from "next/script";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BinNav from "../components/bin/nav";
import Footer from "../components/bin/Footer";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/next";

const App = ({Component, pageProps}) => (
    <ThemeProvider theme={theme}>
        <Meta as={Head}>
            <meta
                name="google-site-verification"
                content="7zE7h5foPaxIcnv5Frq6BkcUb9-3UzVc8q3P_cexf9I"
            />
        </Meta>
        <Component {...pageProps} />
        <Analytics/>
    </ThemeProvider>
)

export default App
