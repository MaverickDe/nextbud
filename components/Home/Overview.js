import Image from "next/image";
import img2 from "../../public/images/images/img2.svg";
import img8 from "../../public/images/images/img8.svg";
import { poppins, inter, gelasio } from "@/fonts/general_fonts";
import { WEBTITLE } from "../const";
import goggle from "../../public/images/images/google.svg";
import apple from "../../public/images/images/apple.svg";
import img23 from "../../public/images/images/img23.svg";

// import starIcon from "../../public/images/icons/star-icon.svg";
// import driveIcon from "../../public/images/icons/drive-icon.svg";
// import heartRateIcon from "../../public/images/icons/heart-rate-icon.svg";
// import handshakeImage from "../../public/images/images/handshake-image.svg";
// import buildIcon from "../../public/images/icons/build-icon.svg";

const Overview = () => {
  return (
    <section id="aboutus" className="relative w-full flex max-md:flex-col-reverse justify-center items-center gap-[10px] my-5 px-5 md:px-20 py-10 shadow-md bg-[black] rounded-[80px] max-md:rounded-[60px] ">
      <div className="w-full max-md:w-full overflow-clip">

      <Image src={img2} className="w-full max-md:scale-[1.3]" priority      loading="eager" />
      </div>
      {/* <Image src={img8} className="w-[30px] absolute top-[30px] right-[40px]" priority      loading="eager" /> */}
              <Image src={img8} className="w-[70px] max-md:w-[50px] absolute top-[40px] right-[50px]" priority      loading="eager" />
      <div className="w-full md:max-w-[480px] text-[white] gap-5 flex flex-col justify-center items-center gap-[10px]    max-w-[1300px] " >
        <h1 className="font-bold text-[3rem] md:text-[4rem]  relative  self-start">About Us
        <Image src={img23} className="w-[100px] absolute left-[70%] top-[40px]" priority      loading="eager" />

        
        </h1>
        {/* <div className="my-5 font-nueuthin text-[#d1d1d1] text-[16px] relative self-start h-full flex flex-col justify-center items-center"> */}

        <div className=" font-nueuthin text-[#d1d1d1] text-[16px] relative self-start">
          <p className=" font-nueuthin ">

      At NextBud, we're on a mission to unite Africans around the world and create a vibrant community where connections flourish, opportunities abound, and cultures thrive. Our platform is more than just a social networking app — it's a gateway to meaningful relationships, empowering experiences, and endless possibilities.
          </p>
          <br/>
          <p className=" font-nueuthin">

Founded in 2024, NextBud was born out of a passion for bringing people together and bridging geographical boundaries. We understand the importance of staying connected to your roots while exploring new horizons, and that's why we've created a platform that celebrates the diversity, resilience, and creativity of the African diaspora.
          </p>
 
 
        </div>
        {/* </div> */}
        <div className="flex md:self-start w-fit gap-10 max-md:flex-col max-md:gap-5 justify-center items-center ">
          <Image src={goggle} className="w-[150px] max-md:w-[150px]" priority      loading="eager" />

          <Image src={apple} className="w-[150px] max-md:w-[150px]" priority      loading="eager" />
        </div>
        
      </div>
      
  </section>
  );
};

export default Overview;
