

import React from "react";
import {Input} from "@nextui-org/react";


export default function CustomInput(prop) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [val, setVal] = React.useState("");


  const toggleVisibility = () => setIsVisible(!isVisible);

  return (

    <>
        <div className={`flex gap-5 items-center w-full h-full rounded-md p-3  focus-within:border-red-500 border-[2px] ${prop.className||""}`}>
        <input className="focus:outline-none w-[calc(100%-40px)] rounded-md bg-transparent " 
          onChange={
            (e) => {
              prop.onChange ? prop.onChange(e.currentTarget.value) : setVal(e.currentTarget.value)
              
            }
            
            
          }
          value={prop.value || val}
          type={prop.type||"text"}
          placeholder={prop.placeholder || ""}
          
        />

        {prop.lastE  && prop.lastE}
   
                           
                        </div>
      

</>


    
  );
}
