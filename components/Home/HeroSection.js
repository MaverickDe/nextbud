import Image from "next/image";
// import { poppins, inter, gelasio } from "@/fonts/general_fonts";

import heroimage1 from "../../public/images/images/heroimg1.svg";
import heroimage2 from "../../public/images/images/heroimg2.svg";
import imageflag1 from "../../public/images/images/heroflag2.svg";
import imageflag2 from "../../public/images/images/heroflag2.svg";
import goggle from "../../public/images/images/google.svg";
import apple from "../../public/images/images/apple.svg";
// import heroImage from "../../public/images/images/hero-image.svg";
// import networkIcon from "../../public/images/icons/network-icon.svg";
// import industryIcon from "../../public/images/icons/industry-icon.svg";
// import likeIcon from "../../public/images/icons/like-icon.svg";

import { gelasio, intria, inter, poppins } from "@/fonts/general_fonts";
import Link from "next/link";
import { WEBTITLE } from "../const";
import Marquee from "../Layout/flagmarque";
import { useEffect, useState } from "react";
import { useMediawQuery } from "@/helpers/utils";
import { useMediaQuery } from "react-responsive";

import { useRouter } from "next/router";
import Heroimage1 from "../Layout/heroimg1";
import Heroimage2 from "../Layout/heroimg2";

const HeroSection = () => {
  console.log("Ggg");
  let [load, setload] = useState(false);

  let v = useMediawQuery(useMediaQuery);
  let router = useRouter();
  useEffect(() => {
    //   if (v.isMobileDevice) {
    //     window.addEventListener('load', () => {
    //       let div =  document.querySelector('#mobhero');
    //       console.log(div)
    //       if (!load) {
    //         div.scrollIntoView()
    //         setload(true)
    //       }
    //     })
    //  }
  }, []);
  return (
    <section
      id="herosec"
      className="w-full mt-[170px]   min-h-[60vh] py-5 px-3 flex flex-col justify-center items-center  text-[black] dark:text-[white]   bg-center bg-cover "
    >
      <div className="w-full relative md:hidden flex justify-center items-center flex-col">
        {/* <Image src={heroimage1}  className="w-[80%] max-md:hidden" priority      loading="eager" /> */}
        <Heroimage2 />
        {/* <Image  src={heroimage2} className="w-full  mt-10 " priority      loading="eager" /> */}
        <div className="w-full absolute bottom-[50px]">
          <Marquee />
        </div>
      </div>
      <h1
        className={`${poppins.className} font-bold  text-[1rem]  text-center max-sm:text-[3.5rem] sm:text-[3rem] md:text-[4rem]  font-bold flex gap-5 max-sm:flex-col max-sm:gap-0`}
      >
        <span className="font-nueubig">Home Away</span>
        <span className="font-nueubig">From Home</span>
      </h1>
      <p className=" w-[80%] max-sm:w-[95%] font-nueuthin   text-[10px] max-sm:text-[20px] md:text-[19px] text-center self-center mt-5 mb-10">
        Connecting you to other Africans in the diaspora starting from your city
        and beyond.
      </p>
      <div className="flex justify-between md:px-10 w-full max-md:justify-center mb-[50px]">
        <Image
          src={imageflag1}
          className="w-[40px] max-md:hidden"
          priority
          loading="eager"
        />
        <div
          id="appimg1"
          className="flex w-fit gap-10 max-md:flex-col max-md:gap-5 justify-center items-center "
        >
          <Image src={goggle} className="w-[200px] " priority loading="eager" />

          <Image src={apple} className="w-[200px] " priority loading="eager" />
        </div>
        <Image
          src={imageflag2}
          className="w-[40px] max-md:hidden"
          priority
          loading="eager"
        />
      </div>
      <div className="w-full relative flex max-md:hidden justify-center items-center flex-col">
        <Heroimage1 />
        {/* <Image src={heroimage1}  className="w-[80%] " priority      loading="eager" /> */}
        {/* <Image id={"mobhero"} src={heroimage2} className="w-full md:hidden mt-10 " priority      loading="eager" /> */}
        <div className="w-full absolute bottom-[50px]">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
