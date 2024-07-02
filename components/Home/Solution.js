import Image from "next/image";

import { WEBTITLE } from "../const";

import img19 from "../../public/images/images/img19.svg";
import Link from "next/link";

const Overview = () => {
  return (
    <section className=" w-full flex  justify-center items-center  ">
      <section className="relative max-w-[1300px]  w-full flex max-md:flex-col justify-center items-center gap-[10px] my-5 p-10 my-20 shadow-md bg-[black] rounded-[80px] max-md:rounded-[40px]">
        <div className="w-full text-[white] gap-5 flex flex-col justify-center  gap-[10px]    max-w-[1300px] font-bold">
          <p className="font-bold font-nueuthin text-[15px]    relative text-[#FFFFFF]">
            Special Offer for Influencers
          </p>
          <p className="my-5 max-lg:text-[50px] max-md:text-[30px] text-[40px]">
            Join us as we embark on a journey of connection, empowerment, and
            celebration.
          </p>

          <Link
            href="/signup"
            className="text-[#9864F1] rounded-md px-5 py-3 my-5 text-bold border-[1px] border-[#9864F1] w-fit"
          >
            Get started as an Influencer
          </Link>
        </div>
        <div className="w-[50%] max-md:w-full overflow-clip">
          <Image
            src={img19}
            className="w-full rounded-md"
            priority
            loading="eager"
          />
        </div>
      </section>
    </section>
  );
};

export default Overview;
