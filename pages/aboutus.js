// import Head from "next/head";

// import Footer from "@/components/Layout/Footer";
// import Mainnav from "@/components/Layout/mainnav";
// import { useState } from "react";
// import Link from "next/link";
// import CircularProgress from '@mui/material/CircularProgress';
// import { DOMAIN, SERVERLOGINURL, WEBTITLE } from "@/components/const";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
// import { useRouter } from 'next/navigation'
// import { poppins } from "@/fonts/general_fonts";
// // DOMAIN
// // import Foote from "@/components/Home/";


// export default function Aboutus() {
//     const router = useRouter()
//     let [data, setdata] = useState(
//         {
//             key: "",
//             password: "",
          
          
          
//         })
   
 
 
//   return (
//     <div className="flex flex-col min-h-[100vh] bg-secondary2 dark:bg-secondary  ">
//       <Head>
//         <title>
//         {WEBTITLE +` about us.`}
//         </title>
//         <meta
//           name="description"
//           content = {WEBTITLE +` about us page.`}
//         />
//         <meta
//           property="og:title"
//           content={WEBTITLE +` about us.`}
//         />
//         <meta
//           property="og:description"
//           content={"Login into "+WEBTITLE +`to access task and make daily earns.`}
//         />
        
//       </Head>
//       {/* <Layout> */}
//           <Mainnav />
//           <div className="flex flex-col justify-center items-center w-full ">
              
//           <section className="w-full min-h-[60vh] p-5 flex flex-col justify-center  bg-center bg-cover">
//       <h1 className={`${poppins.className} text-[1.5rem] sm:text-[2.5rem] md:text-[5rem] text-secondary2 font-bold`}>ABOUT <span className="text-primary">US</span></h1>
//       <p className="text-secondary2  text-[12px] sm:text-[17px] md:text-[20px]">Welcome to {WEBTITLE}, your go-to destination for earning money by completing quick and easy tasks online. At MicroTaskHub, we understand the value of your time and skills, which is why we've created a platform that connects you with a diverse range of microtasks, allowing you to earn money on your own terms</p>
//       <Link href="/signup" className={`${poppins.className}  text-[12px] sm:text-[15px] md:text-[17px]  bg-secondary text-primary mt-10 w-fit px-5 py-2 `}>Get started</Link>
      
//         </section>
//         <div className="py-5 px-3">
//           <div>
//             <h1 className="font-bold text-[25px] my-5">
//               Our mission
//             </h1>
//             <p className=" text-[18px]">
//             At {WEBTITLE}, our mission is to empower individuals from all walks of life to earn extra income and make the most of their free time. We believe that everyone has valuable skills to offer, and by providing a platform for microtasking, we enable individuals to monetize their skills and contribute to various projects and initiatives.
//             </p>
//           </div>
//           <div>
//             <h1 className="font-bold text-[25px] my-5">
//             What We Offer:

//             </h1>
//             <p className=" text-[18px]">
//           {WEBTITLE} offers a wide variety of microtasks across different categories, including data entry, online surveys, image annotation, and more. Whether you're a stay-at-home parent, a college student looking to earn some extra cash, or a freelancer seeking additional income streams, MicroTaskHub provides opportunities for everyone to participate and earn money from the comfort of their own home.
//             </p>
//           </div>

//         </div>
//           </div>
          
//       <Footer/>
//         {/* <Overview />

//         <Solution />
//         <Testimonial /> */}
//       {/* </Layout> */}
//     </div>
//   );
// }
