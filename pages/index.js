import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/index/Carousel";
import carouselData from "../lib/carousel.json";
import SprigConsole from "../components/index/cards/sprig-console";
import Workshops from "../components/index/cards/workshops";
import BinNav from "../components/bin/nav";

/**
 * Renders the main homepage layout for the HackClub Butwal site, including metadata, hero section, carousel, Sprig console, and workshops.
 *
 * Assembles imported components and static data to display the homepage content with a prominent hero section.
 */
export default function Home() {
  return (
    <div className="no-drag-select">
      <Head>
        <title>HackClub Butwal</title>
        <meta
          name="description"
          content="HackClub Butwal - Empowering young coders and makers in Butwal through hands-on learning and community events."
        />
          <meta property="og:title" content="HackClub Butwal"/>
          <meta property="og:description"
                content="Join the vibrant coding community in Butwal. Learn, build, and grow with fellow young developers."/>
          <meta property="og:type" content="website"/>
          <meta name="twitter:card" content="summary_large_image"/>
      </Head>
        <BinNav/>
        <HeroSection/>
        <Carousel cards={carouselData}/>
      <SprigConsole stars={0} consoleCount={0} />
        <Workshops/>
    </div>
  );
}
