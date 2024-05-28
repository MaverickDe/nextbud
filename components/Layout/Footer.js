// import Link from "next/link";
// import logo from "../../public/images/logo/shabee logo_040548.png";
// import insta from "../../public/images/images/insta.svg";
// import facebook from "../../public/images/images/facebook-svgrepo-com.svg";
// import telegram from "../../public/images/images/telegram-svgrepo-com.svg";
// import { useMediaQuery } from "react-responsive";
// import { useMediawQuery } from "../../helpers/utils";
// import Image from "next/image";
// import { gelasio } from "@/fonts/general_fonts";
// import { useEffect, useState, useContext } from "react";
// import { WEBTITLE ,WEBINSTAURL, WEBFACEBOOKPAGEURL, WEBTELEGRAMURL } from "../const";
// // import { Loader1 } from "../utils/loader";
// // import { Contextapi1 } from "@/contextApi/context2";

// // import { BASEURL } from "@/helpers/constant";


// const Footer = () => {
  
//   return (
//     <section className="bg-secondary text-secondary2 p-5 mt-[auto] dark:shadow-md ">
//       <Link href="/" className="text-secondary2 py-5 flex justify-center items-center gap-3 w-fit font-bold">
     
//       <Image alt="image" src={logo} className="w-[50px]" priority
//               loading="eager" />


//         {WEBTITLE}

     
//       </Link>
//       <div className="w-full flex justify-between items-center flex-wrap gap-5 ">
//         <div className="flex gap-[10px] flex-wrap justify-center items-center">{

//           [{link:"/",name:"Home"},{link:"/aboutus",name:"About"},{link:"/contact",name:"Contact"}].map((e, index) => {
//             return (
              
//               <Link key={index} href={e.link}>{e.name }</Link>
//             )
//           })
//         }
          
//         </div>
//         <div>
//           <h1>follow us on</h1>
//           <div className="flex gap-[10px] flex-wrap justify-center items-center w-fit">
//             {[{link:WEBINSTAURL,image:insta},{link:WEBFACEBOOKPAGEURL,image:facebook},{link:WEBTELEGRAMURL,image:telegram}].map((e, index) => {
//               return <Link key={index} href={e.link} target="_blank">
                
                
//                 <Image target="_blank" alt="image" src={e.image} className="w-[30px]" priority
//                   loading="eager" />
//               </Link>
//             })}
//           </div>
//         </div>
        


//       </div>
//       <div className="w-full pt-10 ">
//         <hr></hr>
//         <p className="text-[13px]">© 2024 {WEBTITLE}.com. All Rights Reserved</p>
//         <p className="text-[12px]"> Disclaimer: {WEBTITLE} shall not be treated as the publisher or speaker of any information provided by job publishers.</p>

//       </div>
//     </section>
//   )
// }

// export default Footer;
