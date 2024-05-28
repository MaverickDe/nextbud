// import Head from "next/head";

// import Footer from "@/components/Layout/Footer";
// import Mainnav from "@/components/Layout/mainnav";
// import { useState } from "react";
// import Link from "next/link";
// import CircularProgress from '@mui/material/CircularProgress';
// import { DOMAIN, SERVERDOMAIN, SERVERLOGINURL,SERVERLOGINURL2, WEBTITLE } from "@/components/const";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
// import { useRouter } from 'next/navigation'
// import { useAppSelector,AppDispatch } from "../redux/store/store";
// import { fetch_, setErrorHelper } from "@/components/utils/utils";
// import { revertAll } from "@/redux/actions/actions";

// // import Foote from "@/components/Home/";


// export default function Home() {
//   let UseAppDispatch = AppDispatch()
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
//          <title>
//         {WEBTITLE +` login.`}
//         </title>
//         <meta
//           name="description"
//           content = {WEBTITLE +` login.`}
//         />
//         <meta
//           property="og:title"
//           content={WEBTITLE +` login.`}
//         />
//         <meta
//           property="og:description"
//           content={"Login into "+WEBTITLE +` to access task and make daily earns.`}
//         />
        
//       </Head>
//       {/* <Layout> */}
//           <Mainnav />
//           <div className="flex flex-col justify-center items-center w-full px-3 mt-10">
              
//           <form className="w-full max-w-[500px] flex flex-col gap-10  ">
//                   <h1 className="mt-5 font-bold text-[25px]">Admin login</h1>
                  

//               <div className="w-full ">
//                   <label>email/username</label>
//                   <input value={data.key} onChange={(e)=>{setdatahelper("key")(e.currentTarget.value)}} className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3" placeholder="example@gmial.com or john"  type="text"/>

//               </div>
//               <div>
//                       <label className="mb-1">password</label>
                    
                      
//                       <div  className="flex gap-5 justify-center items-center  shadow-md rounded-md bg-light2 dark:bg-dark2 pr-2">
//                       <input value={data.password} onChange={async (e) => {
                         
//                           setdatahelper("password")(e.currentTarget.value)
                   
//                       }} className="mt-1 w-full  rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3" placeholder="********" type="password" />
//                         <FontAwesomeIcon className="w-[20px]" icon= {faEye}  onClick={(e) => {
//                               let div = e.currentTarget.parentElement.querySelector("input")
                         
//                               if (div.getAttribute("type") == "password") {
//                                   div.setAttribute("type", "text")
//                                   e.currentTarget.classList.add("text-primary")
//                               } else {
//                                   e.currentTarget.classList.remove("text-primary")
//                                 div.setAttribute("type","password")
                                  
//                               }
                              
//                       }} />
                       
//                       </div>
                  
//                   </div>


//                   <button
                  
//                   onClick={async (e) => {
//                     let target = e.currentTarget
                   
//                     e.preventDefault()
                   
// // SERVERLOGINURL
//                 //    
//                     try { 
//                       target.disabled=true
//                       target.querySelector(".submitprogress").classList.remove("hidden")
//                       let resp = await fetch_(SERVERLOGINURL2, {
//                           method: "post",
                          
//                         body: JSON.stringify(data),
//                         mode: "cors",
//                         credentials: "include",
//                           origin:DOMAIN,
//                           headers: {
//                               "Content-Type": "application/json",
//                           },
                          
                          
//                       })
                     
//                       let res = await resp.json();
//                       if (res.token) { 
//                         document.cookie = `auth2=${res.token}`;

//                       }
//                       if (resp.status == 200) {
                             
//                         UseAppDispatch(revertAll())
                             
                             
                             
                             
//                          }
                       
//                         if (res.redirect) {
//                           router.push(res.redirect)
//                           //    redirect(res.redirect)
//                         }
//                             if (res.errmsg) {
                            
//                               return setErrorHelper(res.errmsg)
//                           }
                        
                       
                     
//                       if (resp.status != 200) {
                            
//                             return setErrorHelper("Error in performing action")
                            
                            
                            
                            
//                         }
                        
//                     } catch (e) {
                        
//                         if (e.errmsg) {
                            
//                             return setErrorHelper(e.errormsg)
//                         }
//                       return setErrorHelper("Error in performing action")
                        
//                     } finally {
                   
//                         target.disabled = false
//                         setTimeout(() => {
                            
//                             target.querySelector(".submitprogress").classList.add("hidden")
//                         },1000)
//                     }
                  
//                     }}
                    
                    
                    
                      
                      
                      
                      
                      
                      
                      
                      
//                       className="submitbtn bg-secondary text-primary dark:bg-primary dark:text-secondary shadow-md rounded-md w-fit px-5 py-2 flex gap-2 justify-center items-center" >
//                       <span>
                          
//                       login
//                       </span>
//                       <div className="submitprogress hidden">
                          
//                           <CircularProgress color="inherit" size="1rem" />
//                               </div>

                  
//                   </button>
//                   <div className="flex flex-col">
                      
              
//               <Link href="passwordotp" className="mb-10">forgot password</Link>
//                   </div>
                  
              

//     </form>
//           </div>
          
//       <Footer/>
//         {/* <Overview />

//         <Solution />
//         <Testimonial /> */}
//       {/* </Layout> */}
//     </div>
//   );
// }
