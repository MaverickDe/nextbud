import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";
import img1 from "../../public/images/images/img1.svg";
import img2 from "../../public/images/images/img2.svg";
import img3 from "../../public/images/images/img3.svg";
// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";

export const Section1 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div
      className={`flex w-full justify-between gap-10 ${
        mwidth.isTabletDevice ? "flex-col" : "flex-row"
      }`}
    >
      <div className={`${mwidth.isTabletDevice ? "w-full" : "w-[50%] "}`}>
        <div className="my-10">
          <Image
          alt=""
            src={halfspher}
            className="w-50px h-[10px]"
            priority
            loading="eager"
          />

          <h2 className={`${gelasio.className} text-[25px]`}>
            {" "}
            <b>About us</b>
          </h2>
        </div>

        {mwidth.isTabletDevice ? (
          <>
            <div className="w-full">
              <p className={`${poppins.className} text-justify text-[15px] text-[#1E1E1E] `}>
                {/* <b> */}
                Marshall Goodman Industries Ltd. is a leading company that
                provides innovative and customized technology solutions for both
                business-to-business (B2B) and business-to-consumer (B2C)
                markets. We offer a broad range of digital solutions that are transforming enterprises across africa .
                {/* </b>We offer a wide range of products and services, such as
                software development, web design, mobile applications and
                software development */}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-10">
              <p className={`${poppins.className} text-justify text-[#1E1E1E]`}>
                Established in August 2023 in the vibrant business landscape of
                Nigeria, Marshall Goodman Industries emerged as a beacon of
                innovation and excellence in enterprise technology. Our journey
                began with a simple yet profound vision – to empower businesses
                for the future through cutting-edge solutions and unwavering
                commitment to client success.
              </p>
            </div>

            <div>
              <h2 className={`mb-5 ${gelasio.className}  text-[25px]`}>
                <b>Our Global Presence</b>
              </h2>

              <p className={`${poppins.className} text-justify  text-[#1E1E1E]`}>
                Expanding our horizons, we proudly set foot in the international
                arena with an additional office located at 40 Bank Street,
                Canary Wharf, London. This strategic presence allows us to
                connect with global markets, foster international
                collaborations, and stay at the forefront of technological
                advancements.
              </p>
            </div>
          </>
        )}
      </div>

      <div
        className={`flex relative  gap-6 ${
          mwidth.isTabletDevice ? "w-full" : "w-[40%] "
        } justify-center`}
      >
        <div className="h-100 relative top-20 shadow-2xl rounded-[100px] h-fit">
          <Image
          alt=""
            src={img1}
            className={` w-fit ${
              mwidth.isTabletDevice ? "h-[300px]" : "h-100"} p-0 m-0 `}
            priority
            loading="eager"
          />
        </div>
        <div className="shadow-2xl rounded-[100px] w-fit h-fit">
          <Image
          alt=""
            src={img2}
            className={` w-fit ${
              mwidth.isTabletDevice ? "h-[300px]" : "h-100"} p-0 m-0`}
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
