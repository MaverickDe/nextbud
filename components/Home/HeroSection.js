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

import { gelasio, intria, inter ,poppins} from "@/fonts/general_fonts";
import Link from "next/link";
import { WEBTITLE } from "../const";
import Marquee from "../Layout/flagmarque";


const HeroSection = () => {
  return (
    <section className="w-full mt-20   min-h-[60vh] py-5 px-3 flex flex-col justify-center items-center  text-[black] dark:text-[white]   bg-center bg-cover">
      <h1 className={`${poppins.className} font-bold  text-[1rem]  text-center max-sm:text-[3.3rem] sm:text-[3rem] md:text-[4rem]  font-bold flex gap-5 max-sm:flex-col max-sm:gap-0`}>
        <span className="font-nueubig">
        Home Away

        </span>
        <span className="font-nueubig">

        From Home
        </span>
       
      </h1>
      <p className=" w-[80%] max-sm:w-[95%] font-nueuthin   text-[10px] max-sm:text-[15px] md:text-[19px] text-center self-center my-5">
      Africans around the world and create a vibrant community where connections flourish, opportunities abound, and cultures thrive. </p>
      <div className="flex justify-between md:px-10 w-full max-md:justify-center">
          <Image src={imageflag1} className="w-[40px] max-md:hidden" priority      loading="eager" />
        <div className="flex w-fit gap-10 max-md:flex-col max-md:gap-5 justify-center items-center ">
          <Image src={goggle} className="w-[200px] max-md:w-[150px]" priority      loading="eager" />

          <Image src={apple} className="w-[200px] max-md:w-[150px]" priority      loading="eager" />
        </div>
          <Image src={imageflag2} className="w-[40px] max-md:hidden" priority      loading="eager" />

      </div>
          <Image src={heroimage1} className="w-[80%] max-md:hidden" priority      loading="eager" />
          <Image src={heroimage2} className="w-[80%] md:hidden mt-10" priority      loading="eager" />

     <Marquee/>
     
  </section>
  );
};

export default HeroSection;
