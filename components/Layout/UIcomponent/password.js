
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import {Input} from "@nextui-org/react";


export default function PasswordInput(prop) {
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
          type={isVisible ? "text" : "password"}
          placeholder={prop.placeholder || ""}
          
        />
         <button className="focus:outline-none" type="button" onClick={toggleVisibility}>

<FontAwesomeIcon

  className={`w-[20px] text-[black] ${prop.icon_class||""}`}
  icon={isVisible ? faEyeSlash : faEye}/>

</button>
                           
                        </div>
      

</>


    
  );
}
