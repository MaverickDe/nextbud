import Image from "next/image";
// import dunOneProImage from "../../public/images/images/dunone-pro-image.svg";
// import imsOneProImage from "../../public/images/images/ims-one-pro-image.svg";
// import hmsSonePro from "../../public/images/images/hms-sone-pro.svg";
// import arrowRightIcon from "../../public/images/icons/arrow-right-icon.svg";
import { poppins, gelasio } from "@/fonts/general_fonts";
// import horn from "../../public/images/images/horn.svg"
import img5 from "../../public/images/images/img5.svg"
import img23 from "../../public/images/images/img23.svg";
import img9 from "../../public/images/images/img9.svg"
import img10 from "../../public/images/images/img10.svg"
import img11 from "../../public/images/images/img11.svg"
import img12 from "../../public/images/images/img12.svg"
import img13 from "../../public/images/images/img13.svg"
import img6 from "../../public/images/images/img6.svg"
import img14 from "../../public/images/images/img14.svg"
import img15 from "../../public/images/images/img15.svg"
import img16 from "../../public/images/images/img16.svg"
import img17 from "../../public/images/images/img17.svg"
import img18 from "../../public/images/images/img18.svg"
import { useRouter } from "next/router";
import { WEBTITLE } from "../const";

// import Test from "./ProjectsSlider";

const Projects = () => {
  const router = useRouter();

  return (
    <section id="features" className="w-full flex justify-center bg-[white]  items-center p-5 py-20">
    <section className=" relative text-secondary2  max-w-[1300px]  relative w-full min-h-[100px] flex justify-between items-center flex-col gap-[10px] ">
    <h1 className={`${poppins.className} font-bold  text-[1rem]   max-sm:text-[3.5rem] my-10 sm:text-[3rem] md:text-[4rem]  font-bold flex gap-5 max-sm:flex-col max-sm:gap-0 text-[black] self-start`}>
        <span className="font-nueubig">
        Features

        </span>
        <span className="font-nueubig relative">

            Just for
            
            <span className="relative">
               {" You"}
    <Image src={img23} className=" absolute left-[10px] bottom-[0%] w-[150px]" priority      loading="eager" />
            </span>
        </span>
       
      </h1>
        <div className="w p-10 relative box-border rounded-[80px] max-md:rounded-[40px]  overflow-hidden    bg-[linear-gradient(-45deg,#9864F1,#EFE6F7,#9864F1),linear-gradient(60deg,#EFE6F7,#9864F1)] max-sm:bg-[linear-gradient(45deg,#EFE6F7,#9864F1),linear-gradient(60deg,#EFE6F7,#9864F1)] w-full ">
    <Image src={img5} className="z-5 absolute  bottom-0 left-0 " priority      loading="eager" />
          <div className="w-[30%]">

            <h1 className=" text-[45px] max-sm:text-[30px] flex flex-col text-[black]" >
              <span className="text-[#5A00CF] flex flex-col max-sm:flex-row max-sm:gap-3 font-nueubig">
                <span className="">
                  
                Create
                </span>
                <span>

                Meaningful
                </span>

              </span>
              <span>
                
              </span>
              Connections
            </h1>
           
          </div>
          <div className=" z-10 w-full flex p box-border gap-10 justify-between max-sm:flex-col">
            <div className="w-[30%] max-sm:w-full">
              <p className="text-[black] font-nueuthin">Network with thousands of Africans in the diaspora through our Find Buddy page, starting with your city.</p>
              <button className="text-[black] rounded-md px-5 py-3 my-5 text-bold border-[1px] border-[black] z-10">Get the app</button>
            </div>
            <div className="w-[70%] flex gap-5 flex-col max-sm:w-full box-border">

              <div className="max-sm:translate-x-7 flex box-border gap-5 max-sm:flex-col w-full">
              <Image src={img9} className=" w-full max-sm:w-full bottom-0 left-0 " priority      loading="eager" />
              <Image src={img10} className=" w-full max-sm:w-full bottom-0 left-0 " priority      loading="eager" />
            </div>
              <div className="flex w-full box-border gap-5 max-sm:hidden">
              <Image src={img11} className=" w-full bottom-0 left-0 " priority      loading="eager" />
              <Image src={img12} className=" w-full bottom-0 left-0 " priority      loading="eager" />
            </div>
            

            </div>

          </div>
          
        </div>
        


        
        <div className=" py-5  box-border  overflow-hidden    flex  w-full max-sm:flex-col gap-5  ">
   
        
          
        <div className=" py-10 px-[60px] max-md:px-5 relative box-border  overflow-hidden  flex flex-col items-center justify-center  rounded-[80px] max-md:rounded-[40px] bg-[#E0F7FF] w-full max-sm:w-full ">

            <h1 className="text-[#036181] px-5 self-start font-bold text-[2rem] nueubold">Buddy Room</h1>
            <p className="text-[black] px-5 self-start font-nueuthin md:pt-5 pb-3 ">Join or host a variety of events, plan group trip and activities on Buddy room 
</p>
            <Image src={img6} className="w-[100%] z-10 " priority      loading="eager" />
        
    <Image src={img14} className="z-1 absolute  bottom-0 left-0 " priority      loading="eager" />
        
          
    </div>
        <div className=" py-10  relative box-border  overflow-hidden  flex flex-col items-center justify-center  rounded-[80px] max-md:rounded-[40px] bg-[#E8CBD9] w-full max-sm:w-full ">

            <Image src={img13} className=" w-[100%] relative right-[-60px] max-md:right-[-30px]" priority      loading="eager" />
        <div className="  px-[60px] max-md:px-[30px] relative box-border  overflow-hidden  flex flex-col items-center justify-center  rounded-[80px] max-md:rounded-[40px] bg-[#E8CBD9] w-full max-sm:w-full ">
            <h1 className="text-[#B20462] self-start font-bold text-[2rem] z-10 nueubold pt-3">Mart</h1>
            <p className="text-[black] font-nueuthin self-start z-10 md:pt-5 pb-3">
Support African businesses and services in the diaspora through our marketplace</p>
        
        
          
    </div>
    <Image src={img15} className="z-1 absolute  bottom-0 right-0 " priority      loading="eager" />
    </div>
        </div>
        
              
        <div className=" p-5 relative box-border  overflow-hidden  max-sm:flex-col-reverse justify-between  rounded-[80px] max-md:rounded-[40px] bg-[linear-gradient(45deg,#10B904,#EEFAED_70%),linear-gradient(60deg,#EFE6F7,#9864F1)] w-full flex gap-5 ">
    <Image src={img16} className="z-1 absolute  bottom-0 right-0 " priority      loading="eager" />
    <div className=" z-10 w-[50%] h-[500px]  max-sm:w-full flex p box-border justify-between  gap-5">
      
     
            <div direction="up" behavior="scroll"
 className="w-[calc(100%/2)]   max-sm:w-full  relative max-sm:overflow-hidden ">
              <div className="flex  absolute marcdown  flex-col gap-3 w-full  ">
              <Image src={img17} className=" w-full   " priority      loading="eager" />
              <Image src={img18} className=" w-full  " priority      loading="eager" />

      
              </div>
          </div>
             
            <div direction="down" className="w-[calc(100%/2)] relative  max-sm:hidden">
            <div className="flex absolute marcdown2 flex-col gap-3 w-full ">
              <Image src={img18} className=" w-full  " priority      loading="eager" />
              <Image src={img17} className=" w-full   " priority      loading="eager" />
              </div>
          </div>

          </div>
          <div className="w-[35%] max-sm:w-full flex flex-col justify-center">

            <h1 className=" text-[45px] max-sm:text-[30px] flex flex-col text-[black]" >
              <span className="text-[#0FBA01]  ">
             
       Ask Buddy

              </span>
              <span>
                
            Get Trusted Advice
              </span>
            </h1>
            <div className="w-full ">
              <p className="text-[black] w-full font-nueuthin">Get trusted advice from fellow Africans in the diaspora. Ask questions anonymously for greater privacy and control over your online presence. Contributors are rewarded for their helpful answers.
</p>
              <button className="text-[black] rounded-md px-5 py-3 my-5 text-bold border-[1px] border-[black]">Get the app</button>
            </div>
           
          </div>
          
          
        </div>
                   
    
  </section>
  </section>
  );
};

export default Projects;
