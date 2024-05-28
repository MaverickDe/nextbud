import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
// import Image from "next/image";
// // import { poppins , intria,gelasio } from "@/fonts/general_fonts";
// import img1 from "../../public/images/images/img1.svg";
// import img2 from "../../public/images/images/img2.svg";
// import img3 from "../../public/images/images/img3.svg";
// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
// import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";
export const Section3 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className="w-full flex flex-wrap justify-center items-center flex-col mt-[100px]">
      <h1 className={`  ${gelasio.className} ${mwidth.isMobileDevice?"text-[20px]":"text-[33px]"}`}>
        <b>Our Work Process</b>
      </h1>
      <p
        className={`max-w-[1000px] w-[90%] ${poppins.className} ${mwidth.isMobileDevice?"text-[15px]":""} text-[#1E1E1E] font-[400px] leading-2`}
      >
        At Marshall Goodman Industries, we follow a meticulous and collaborative
        approach to ensure the success of every project. Our work process can be
        summarized in the following steps
      </p>
    </div>
  );
};
