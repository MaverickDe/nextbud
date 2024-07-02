import Image from "next/image"
import heroimage from "@/public/images/images/heroimage/Heropicture1.png";
import africa from "@/public/images/images/heroimage/africa.svg";
import flag1 from "@/public/images/images/heroimage/flag1.svg";
import flag2 from "@/public/images/images/heroimage/flag2.svg";
import flag3 from "@/public/images/images/heroimage/flag3.svg";
import flag4 from "@/public/images/images/heroimage/flag4.svg";
let Heroimage1 = () => {


    return <div className="w-full relative flex justify-center items-center">
        
        <Image
                      src={africa}
                    
                      priority
                      className="w-[70%] opacity-20"
                      loading="eager"
                    />

        <div className="w-full h-fit absolute top-10 left-0 flex justify-center items-center">
        <div className="w-full h-fit  px-10  flex justify-center ">
            
                <div className="w-[25%]  gap-10 relative pt-10">
                <Image
                      src={flag1}
                    
                      priority
                      className=""
                      loading="eager"
                    />
                <Image
                      src={flag2}
                    
                      priority
                      className="absolute top-[40%] right-0"
                      loading="eager"
                    />

            
        </div>
        <div className="w-full flex justify-center ">
        <Image
                      src={heroimage}
                    
                      priority
                      className="w-[70%]"
                      loading="eager"
                    />

        </div>
        <div className="w-[25%]  gap-10 relative pt-10">
            <Image
                  src={flag2}
                
                  priority
                  className="absolute top-[40%] left-0"
                  loading="eager"
                />
                <Image
                      src={flag1}
                    
                      priority
                      className="absolute  right-0"
                      loading="eager"
                    />

            
        </div>
</div>
</div>

    </div>
    
}


export default Heroimage1