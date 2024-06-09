import Head from "next/head";

import HeroSection from "@/components/Home/HeroSection";
import Overview from "@/components/Home/Overview";
import Projects from "@/components/Home/Projects";
import Atten from "@/components/Home/atten";
import Solution from "@/components/Home/Solution";
import Footer from "@/components/Layout/Footer";
import Mainnav from "@/components/Layout/mainnav";
import Sub from "@/components/Home/sub";
import { WEBTITLE } from "@/components/const";
import RootLayout from "@/components/Layout/wrapper/layout1"

// import Foote from "@/components/Home/";

export default function Home() {
  return (
    <>
      <Head>
      <title>
        {WEBTITLE +" home"}
        </title>
        <meta
          name="description"
          content = {"Africans around the world and create a vibrant community where connections flourish, opportunities abound, and cultures thrive."}
        />
        <meta
          property="og:title"
          content={WEBTITLE +` home`}
        />
        <meta
          property="og:description"
          content = {"Africans around the world and create a vibrant community where connections flourish, opportunities abound, and cultures thrive."}
        />
        
      </Head>
      {/* <Layout> */}
      {/* <Mainnav/> */}

      <RootLayout>

      <HeroSection />
      <Overview />
      <Projects />
    
      <Solution />
      </RootLayout>
      {/* <Sub />  */}
   
    </>
  );
}
