import Image from "next/image";
import img2 from "../../public/images/images/img2.svg";
import img8 from "../../public/images/images/img8.svg";
import { poppins, inter, gelasio } from "@/fonts/general_fonts";
import { WEBTITLE } from "../const";
import goggle from "../../public/images/images/google.svg";
import apple from "../../public/images/images/apple.svg";
import img23 from "../../public/images/images/img23.svg";
import img19 from "../../public/images/images/img19.svg";
import Link from "next/link";

// import starIcon from "../../public/images/icons/star-icon.svg";
// import driveIcon from "../../public/images/icons/drive-icon.svg";
// import heartRateIcon from "../../public/images/icons/heart-rate-icon.svg";
// import handshakeImage from "../../public/images/images/handshake-image.svg";
// import buildIcon from "../../public/images/icons/build-icon.svg";

const Overview = () => {
  return (
    <section className="relative w-full flex max-md:flex-col justify-center items-center gap-[10px] my-5 p-5 my-20 shadow-md bg-[black] rounded-[30px]">
         <div className="w-full text-[white] gap-5 flex flex-col justify-center  gap-[10px]    max-w-[1300px] font-bold" >
        
              <p className="font-bold font-nueuthin text-[20px] md:text-[25px]  relative text-[#FFFFFF]">
              Special Offer for Influencers

        
        </p>
      <h1 className="my-5 max-lg:text-[50px] max-md:text-[40px] text-[70px]">
      Join us as we embark on a journey of connection, empowerment, and celebration.
        </h1>
       
        <Link href="/signup" className="text-[#9864F1] rounded-md px-5 py-3 my-5 text-bold border-[1px] border-[#9864F1] w-fit">Get started as an Influencer</Link>
        
      </div>
      <div className="w-[50%] max-md:w-full overflow-clip">

      <Image src={img19} className="w-full rounded-md" priority      loading="eager" />
      </div>

     
      
  </section>
  );
};

export default Overview;
