// import Head from "next/head";

// import Footer from "@/components/Layout/Footer";
// import Mainnav from "@/components/Layout/mainnav";
// import { useState } from "react";
// import Link from "next/link";
// import CircularProgress from '@mui/material/CircularProgress';
// import { DOMAIN, SERVERLOGINURL, WEBCONTACT, WEBTITLE } from "@/components/const";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
// import { useRouter } from 'next/navigation'
// import { poppins } from "@/fonts/general_fonts";
// // bg-[url('../public/images/images/contact-us-3483604-2912020.png')]


// // DOMAIN
// // import Foote from "@/components/Home/";


// export default function Aboutus() {
//     const router = useRouter()
//     let [data, setdata] = useState(
//         {
//             key: "",
//             password: "",
          
          
          
//         })
//     let [error, seterror] = useState("")
   
//    let setdatahelper = (key) => {

//         return (value) => {
            
//             let data_ = { ...data }
//             data_[key]=value
//             setdata(data_)
//         }
//     }
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
              
//           <section className="w-full min-h-[60vh] p-5 flex flex-col justify-center    bg-left bg-cover">
//       <h1 className={`${poppins.className} text-[1.5rem] sm:text-[2.5rem] md:text-[5rem] text-secondary dark:text-[white] font-bold`}>CONTACT <span className="text-primary">US</span></h1>
//       <p className="text-secondary dark:text-[white] font-bold  text-[17px] sm:text-[20px] md:text-[20px]">Contact us  {WEBTITLE}, on whatsapp with this number {WEBCONTACT} </p>
//       <Link href={`https://wa.me/${WEBCONTACT}`} target="_blank" className={`${poppins.className}  text-[12px] sm:text-[15px] md:text-[17px]  bg-secondary dark:bg-primary dark:text-[white] text-primary mt-10 w-fit px-3 py-2 `}>Contact us</Link>
      
//         </section>
      
//           </div>
          
//       <Footer/>
//         {/* <Overview />

//         <Solution />
//         <Testimonial /> */}
//       {/* </Layout> */}
//     </div>
//   );
// }
