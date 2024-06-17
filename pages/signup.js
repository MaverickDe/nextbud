import Fade from "@/components/Layout/slick/fade"
import RootLayout from "@/components/Layout/wrapper/layout1"
import RootLayout3 from "@/components/Layout/wrapper/layout2"
import phone1 from "@/public/images/images/phoneslide/phone1.svg"
import phone2 from "@/public/images/images/phoneslide/phone2.svg"
import phone3 from "@/public/images/images/phoneslide/phone3.svg"
import phone4 from "@/public/images/images/phoneslide/phone4.svg"
import phone5 from "@/public/images/images/phoneslide/phone5.svg"
import logo3 from "@/public/images/logo/logo3.svg"
import {Button} from "@nextui-org/react";
import { Button as bf } from "@mui/material"
import Image from "next/image"
import  InputPassword  from "@/components/Layout/UIcomponent/password.js"
import  Input  from "@/components/Layout/UIcomponent/input.js"
import CustomInput from "@/components/Layout/UIcomponent/input.js"
import Link from "next/link"
export default function Signup() {
    return <div className="w-full h-[100vh] relative flex flex-col ">
        
       <RootLayout3>
 <div  className="w-full flex-col flex-1 md:overflow-y-auto flex justify-center  items-center	">
            <section className="w-full h-[100%] max-md:my-10     flex justify-center  items-center ">

                <div className="w-[50%] h-[100%]  max-lg:hidden flex-end mt-auto ">
                {/* <Image src={phone1}  className=" h-full " priority      loading="eager" /> */}
                    <Fade>
                        
                    {
                        [

                            phone1,
phone2,
phone3,
phone4,
phone5
                        ].map((e, index) => {
                            return   <Image src={e} key={index}  priority  className="h-full"     loading="eager" />
                        })
                    }
                </Fade>
                </div>
                <div className="flex flex-col w-full max-w-[500px] px-5 gap-10 lg:mb-auto">
                    <div>

               <h1 className="text-[30px]">Let’s Get Started!</h1>
                <p className="font-nueuthin">Join us as we embark on a journey of connection, empowerment, and celebration</p>
                    </div>
                    <div className="flex flex-col w-full   gap-5">
                      
                        <CustomInput  className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6]" placeholder="Full name" type="text" />
                        <CustomInput  className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6]" placeholder="Email Address" type="email" />
                        {/* <CustomInput type ="input" className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6]" placeholder="Password" /> */}
                    <InputPassword   className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6]"  placeholder="Password" />
                        
                        {/* <Input type={ "email"} placeholder="email" /> */}
                    
                        <Button
                            isLoading={false}
                            variant="faded"
                            className="bg-[#DDDDDD] text-[#878787] rounded-md w-full p-3"
    
      spinner={
        <svg
          className="animate-spin h-5 w-5 text-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      }
    >
      Continue
    </Button>
                    </div>
                    <div >
                            <p className=" text-[12px] mb-3  font-nueuthin">
                                <span>

                                    {"By selecting "}
                                </span>
                                <b>
                                    { "Continue, "}
                                </b>
                              

                               {"I agree to Nextbud’s "} 
                               
                                <Link href="/tos" className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]">
                               {" Terms of condition"}
                           
                                </Link>{", "}
                                <Link href="/acceptibilitypol" className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]">
                           {"Acceptable use policy "}
                                
                                </Link>
                               
{", and "}
                                
                               
                                <Link href="/privacy" className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]">
                           {"Privacy Policy "}
                                
                            </Link>

                              
                                
                                
                                .</p>
                        <p className=" flex gap-5  items-center">
                            <span className="font-nueuthin">
                            Already an Influencer?
                            </span>
                            <Link href="/login" className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]">
                            Log in
                            </Link>

                        </p>
                    </div>
                </div>

            </section>

    </div>
        </RootLayout3>
    </div>
}