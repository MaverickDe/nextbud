import Image from "next/image";
// import toppngImage2 from "../../public/images/images/toppng-image2.svg";
import { poppins, gelasio } from "@/fonts/general_fonts";
import { WEBTITLE } from "../const";
import Link from "next/link";
import insta from "../../public/images/icons/instaicon1.svg"
import fb from "../../public/images/icons/fbicon1.svg"
import tiktok from "../../public/images/icons/tikicon1.svg"
import logo from "../../public/images/logo/logo1.svg";
import x from "../../public/images/icons/xicon1.svg"
import Marquee from "../Layout/flagmarque";
// import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="w-full p-5  mt-20">
    <section className="w-full flex  justify-between sm:items-center  max-sm:flex-col">
      <Link
            className="flex  gap-[10px] max-sm:mb-5 "
            href="/"
          >
            <Image
              alt="image"
              src={logo}
              className=""
              priority
              loading="eager"
            />
        
          </Link>
          <div className="flex gap-5 max-sm:w-full max-sm:justify-between">
              <div>
                  <p className="text-[#656565] mb-5">Contact us</p>
                  <p>Support@nextbud.com</p>
              </div>
              <div>
                  <p className="text-[#656565] mb-5">Socials</p>
                  <div className="flex gap-5">
     <Image src={fb} className=" rounded-md" priority      loading="eager" />
     <Image src={insta} className=" rounded-md" priority      loading="eager" />
     <Image src={tiktok} className=" rounded-md" priority      loading="eager" />
     <Image src={x} className="rounded-md" priority      loading="eager" />

                      
                  </div>
              </div>
     </div>
          </section>
          <Marquee/>
    </section>
  );
};

export default Testimonial;
