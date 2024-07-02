import Image from "next/image"
import heroimage from "@/public/images/images/heroimage/Heropicture1.png";
import africa from "@/public/images/images/heroimage/africa.png";
import flag1 from "@/public/images/images/heroimage/flag1.svg";
import flag2 from "@/public/images/images/heroimage/flag2.svg";
import flag3 from "@/public/images/images/heroimage/flag3.svg";
import flag4 from "@/public/images/images/heroimage/flag4.svg";
let Heroimage2 = () => {


    return <div className="w-full h-fit rounded-xl mb-[100px] relative  flex justify-center items-center">
        <div className="w-full overflow-x-hidden h-fit px-[auto] justify-center ">
        <div className="w-[120%] h-fit  ">

        <Image
                      src={africa}
                    
                      priority
                      className="w-full block opacity-20  top-[50px] left-0"
                      loading="eager"
                    />
        </div>
        </div>

        <div className="w-full h-fit absolute top-5 left-0 flex justify-center items-center">
        <div className="w-full h-fit  px-5  flex justify-center ">
            
        
        <div className="w-full flex justify-center ">
        <Image
                      src={heroimage}
                    
                      priority
                      className="w-[100%]"
                      loading="eager"
                    />

        </div>
    
</div>
</div>

    </div>
    
}


export default Heroimage2