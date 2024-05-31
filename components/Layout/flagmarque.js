

import flagmul1 from "@/public/images/images/flag/flagmul1.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
let Marquee = () => {
    

  

    // return  <marquee className=" my-5  flex justify-center items-center">
    // <Image src={flagmul1} className="scale-[10] " priority      loading="eager" />

  
  
  
  
    // </marquee>

    
  

    return  <div className=" overflow-hidden w-full my-5  flex justify-center items-center">
    <object className="marcdown3" type="image/svg+xml" data="/images/images/flag/flagmul1.svg">svg-animation</object>

  
  
  
  
    </div>

    
    
}


export default Marquee