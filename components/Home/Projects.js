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
    <section className="w-full flex justify-center bg-[white] items-center p-5 py-20">
    <section className=" relative text-secondary2  max-w-[1300px]  relative w-full min-h-[100px] flex justify-between items-center flex-col gap-[10px] ">
    <h1 className={`${poppins.className} font-bold  text-[1rem]   max-sm:text-[3.5rem] my-10 sm:text-[3rem] md:text-[4rem]  font-bold flex gap-5 max-sm:flex-col max-sm:gap-0 text-[black] self-start`}>
        <span className="font-nueubig">
        Features

        </span>
        <span className="font-nueubig relative">

       Just for You
    <Image src={img23} className="w-[100px] absolute right-[0%] top-[65px]" priority      loading="eager" />
        </span>
       
      </h1>
        <div className=" p-5 relative box-border  overflow-hidden   rounded-[30px] bg-[linear-gradient(-45deg,#9864F1,#EFE6F7,#9864F1),linear-gradient(60deg,#EFE6F7,#9864F1)] w-full ">
    <Image src={img5} className="z-1 absolute w-[150px] bottom-0 left-0 max-md:w-[150px]" priority      loading="eager" />
          <div className="w-[30%]">

            <h1 className=" text-[45px] max-sm:text-[30px] flex flex-col text-[black]" >
              <span className="text-[blue] flex flex-col max-sm:flex-row max-sm:gap-3">
                <span>
                  
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
          <div className=" z-10 w-full flex p box-border justify-between max-sm:flex-col">
            <div className="w-[30%] max-sm:w-full">
              <p className="text-[black]">Connect with an unlimited number of Africans in the UK on the Find Buddy page, expanding networking opportunities across borders.</p>
              <button className="text-[black] rounded-md px-5 py-3 my-5 text-bold border-[1px] border-[black]">Get the app</button>
            </div>
            <div className="w-[60%] flex gap-5 flex-col max-sm:w-full box-border">

              <div className="max-sm:translate-x-10 flex box-border gap-5 max-sm:flex-col w-full">
              <Image src={img9} className=" w-[calc(100%/2)] max-sm:w-full bottom-0 left-0 " priority      loading="eager" />
              <Image src={img10} className=" w-[calc(100%/2)] max-sm:w-full bottom-0 left-0 " priority      loading="eager" />
            </div>
              <div className="flex w-full box-border gap-5 max-sm:hidden">
              <Image src={img11} className=" w-[calc(100%/2)] bottom-0 left-0 " priority      loading="eager" />
              <Image src={img12} className=" w-[calc(100%/2)] bottom-0 left-0 " priority      loading="eager" />
            </div>
            

            </div>

          </div>
          
        </div>
        


        
        <div className=" py-5  box-border  overflow-hidden    flex justify-between w-full max-sm:flex-col max-sm:gap-5  ">
   
        
          
        <div className=" p-5 relative box-border  overflow-hidden  flex flex-col items-center justify-center  rounded-[30px] bg-[#E0F7FF] w-[45%] max-sm:w-full ">

            <h1 className="text-[#036181] self-start font-bold text-[2rem] nueubold">Buddy Room</h1>
            <p className="text-[black] self-start font-nueuthin">Create or attend an unlimited number of events</p>
            <Image src={img6} className=" w-[80%] z-10 " priority      loading="eager" />
        
    <Image src={img14} className="z-1 absolute w-[150px] bottom-0 left-0 max-md:w-[150px]" priority      loading="eager" />
        
          
    </div>
        <div className=" p-5 relative box-border  overflow-hidden  flex flex-col items-center justify-center  rounded-[30px] bg-[#E8CBD9] w-[45%] max-sm:w-full ">

            <Image src={img13} className=" w-[80%] " priority      loading="eager" />
            <h1 className="text-[#B20462] self-start font-bold text-[2rem] z-10 nueubold">Mart</h1>
            <p className="text-[black] font-nueuthin self-start z-10">Host your businesses and services on our Marketplace</p>
        
    <Image src={img15} className="z-1 absolute w-[150px] bottom-0 right-0 max-md:w-[150px]" priority      loading="eager" />
        
          
    </div>
        </div>
        
              
        <div className=" p-5 relative box-border  overflow-hidden  max-sm:flex-col-reverse  rounded-[30px] bg-[linear-gradient(45deg,#10B904,#95ea8f),linear-gradient(60deg,#EFE6F7,#9864F1)] w-full flex gap-5 ">
    <Image src={img16} className="z-1 absolute w-[150px] bottom-0 left-0 max-md:w-[150px]" priority      loading="eager" />
    <div className=" z-10 w-[65%] max-sm:w-full flex p box-border justify-between  gap-5">
          
              <Image src={img17} className=" w-[calc(100%/2)] max-sm:w-full bottom-0 left-0 " priority      loading="eager" />
              <Image src={img18} className=" w-[calc(100%/2)] max-sm:hidden bottom-0 left-0 " priority      loading="eager" />
      

          </div>
          <div className="w-[30%] max-sm:w-full">

            <h1 className=" text-[45px] max-sm:text-[30px] flex flex-col text-[black]" >
              <span className="text-[#0FBA01]  ">
             
       Ask Buddy

              </span>
              <span>
                
            Get Trusted Advice
              </span>
            </h1>
            <div className="w-full ">
              <p className="text-[black] w-full font-nueuthin">Option to remain anonymous when asking questions or providing answers, providing greater privacy and control over online presence.</p>
              <button className="text-[black] rounded-md px-5 py-3 my-5 text-bold border-[1px] border-[black]">Get the app</button>
            </div>
           
          </div>
          
          
        </div>
                   
    
  </section>
  </section>
  );
};

export default Projects;
