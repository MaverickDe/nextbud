
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { handleclose } from "@/redux/slices/centermodals";
import { Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
// import { persistStore } from "redux-persist";

export default function ReduxProviderPage() {
  const centermodal = useAppSelector(
    (state) => state.centermodal
  );
  const {user} = useAppSelector(
    (state) => state.user
  );

    let UseAppDispatch = AppDispatch();
 
  return (<>
    

    {
     ( user.user_name && !user.is_admin )
      &&  <>
    <Script strategy="beforeInteractive"   src="script/moneytag/moneytagvig.js" />
      <Script strategy="beforeInteractive" src="script/moneytag/moneytaginpage.js" />
     
      </>  
}
    
    

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
            <p className=" mb-5">{centermodal.text}</p>
            <div className="flex gap-5 w-full justify-between">
              {centermodal.cancel && (
                <button
                  className="rounded-md shadow-md px-5 py-2 border-secondary border-[2px] rounded-md dark:border-primary"
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
                  className="rounded-md shadow-md px-5 py-2 text-primary dark:text-secondary bg-secondary dark:bg-primary"
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