
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { handleclose } from "@/redux/slices/centermodals";
import { Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/init";
import { setcurrentUser, setisLoggedin } from "@/redux/slices/auth";
import { useEffect } from "react";
import { setuser } from "@/redux/slices/user";
import { readGeneral } from "@/firebase/firebase_func";

// import { persistStore } from "redux-persist";

export default function ReduxProviderPage() {
  const centermodal = useAppSelector(
    (state) => state.centermodal
  );
  const {id} = useAppSelector(
    (state) => state.user
  );
  const {currentUser} = useAppSelector(
    (state) => state.authUser
  );

  let UseAppDispatch = AppDispatch();
  
  let initializeUser = (user) => {
    console.log("statechange",user)
    if (user) {
      UseAppDispatch(

        setcurrentUser({...user})
      )
      UseAppDispatch(

        setisLoggedin(true)
      )
    
    } else {
      UseAppDispatch(

        setcurrentUser(null)
      )
      UseAppDispatch(

        setisLoggedin(false)
      )
    
  }
  }
  useEffect(
    
    
    () => {
      console.log("kfjfkfj")
    let v =  async () => {
      console.log(currentUser,id)
      
        
          if (currentUser) {
            console.log(currentUser.uid,"lllmssssssss")
        
            let c = await readGeneral("profile", currentUser.uid)
            console.log(c,"lllm")
            UseAppDispatch(
  
              setuser(c)
            )
      
          }
      

        
    
      }

      v() 
},[id,currentUser])


  useEffect(() => {
    
    const suscribe = onAuthStateChanged(auth, initializeUser)
    
    return suscribe
  },[])
 
  return (<>
    

   
<Modal
        open={centermodal.open}
        // onClose={}
      >
        <div
          className={` w-[100vw] rounded-md shadow-md min-h-[100%] px-[5px]  flex items-center justify-center  items-center  `}
        >


          <div
            className={`p-5 px-3 border-b-[1px] w-fit max-w-[600px] rounded-md shadow-md min-h-[100px]  bg-secondary2 dark:bg-dark2  flex items- flex-col justify-center items-center  `}
          >
            {
              centermodal.caution &&
  <FontAwesomeIcon size={1}  icon= {faTriangleExclamation} className=" w-[50px] text-[40px] text-primary dark:text-primary"/>
            }

            <h1 className="font-bold my-5">{centermodal.head}</h1>
            <p className=" mb-5 font-nueuthin">{centermodal.text}</p>
            <div className="flex gap-5 w-full justify-between">
              {centermodal.cancel && (
                <button
                  className="rounded-md shadow-md px-5 py-2 border-[#DDDDDD] text-[#878787] border-[2px] rounded-md font-nueuthin"
                onClick={async () => {
                  if (centermodal.cancel.action) {
                      
                   await  centermodal.cancel.action();
                    }
                      UseAppDispatch(
                          
                    handleclose()
                      )
                  }}
                >
                  {centermodal.cancel.name}
                </button>
              )}
              {centermodal.ok && (
                <button
                  className="rounded-md shadow-md px-5 py-2 bg-[#DDDDDD] text-[#878787] font-nueuthin   bg-secondary dark:bg-primary"
                onClick={async () => {
                  if (centermodal.ok.action) {
                      
                    await   centermodal.ok.action();
                    }
                    UseAppDispatch
                      (

                      handleclose()
                    )
                  }}
                >
                  {centermodal.ok.name}
                </button>
              )}
            </div>
          </div>
        </div>
      </Modal>

    
 
  
  
  
  </>)
}