import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";
import img1 from "../../public/images/images/img1.svg";
import img2 from "../../public/images/images/img2.svg";
import img3 from "../../public/images/images/img3.svg";
// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
// import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";
export const Section2 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className={`flex w-full gap-10 mt-[200px] justify-between ${mwidth.isTabletDevice? "flex-col":"flex-row"}`}>
      <div className={` ${mwidth.isTabletDevice? "w-full":"w-[50%]"}`}>
              <h2 className={`mb-10   ${mwidth.isTabletDevice? "text-[20px]":"text-[25px]"}`}>
          <b>Founders Bio</b>
        </h2>
        {mwidth.isTabletDevice ? (
          <p className={`${poppins.className} text-[15px]  text-[#1E1E1E] `}>
            Marshall Goodman Industries was Founded in August 2023, our company's
            visionary founding team instills a commitment to excellence and
            progress in all our endeavors.
          </p>
        ) : (
          <p
            className={`${poppins.className} text-justify text-[#1E1E1E] font-[400px] leading-2`}
          >
            At the helm of Marshall Goodman Industries is our visionary founder,
            Marshall O.C Goodman, whose passion for technology and business
            acumen laid the foundation for our company. With a relentless
            pursuit of excellence, our founder envisioned a company that not
            only delivers top-notch solutions but becomes a strategic partner in
            the growth journey of every client.
          </p>
        )}
      </div>

          <div className={`${mwidth.isTabletDevice ? "w-full" : "w-[40%]"} flex flex-col items-center `}>
        <div className="h-100">
          <Image alt="" src={img3} className="w-30 p-0 m-0" priority loading="eager" />
        </div>
        <div className={`${mwidth.isMobileDevice ? "text-[10px]" : ""}`}>
          Marshall Onyekachi Chinaecherem
        </div>
        <h2>
          <b className="text-primary">CEO/FOUNDER</b>
        </h2>
      </div>
    </div>
  );
};
