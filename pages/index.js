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
          content = {"a leading tool for generating passive income by performing online task"}
        />
        <meta
          property="og:title"
          content={WEBTITLE +` home`}
        />
        <meta
          property="og:description"
          content = {"a leading tool for generating passive income by performing online task"}
        />
        
      </Head>
      {/* <Layout> */}
      <Mainnav/>
      {/* <HeroSection /> */}
      {/* <Overview /> */}
      {/* <Projects /> */}
      {/* <Atten /> */}
      <Solution />
      {/* <Sub />  */}
      {/* <Footer/> */}
        {/* <Overview />

        <Solution />
        <Testimonial /> */}
      {/* </Layout> */}
    </>
  );
}
