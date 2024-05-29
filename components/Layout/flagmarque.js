

import flagmul1 from "@/public/images/images/flag/flagmul1.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
let Marquee = () => {
    

  

    return  <marquee className=" my-5 h-[40px] flex justify-center items-center">
    <Image src={flagmul1} className="scale-[7] sm:scale-[3] " priority      loading="eager" />

  
  
  
  
    </marquee>

    
    
}


export default Marquee