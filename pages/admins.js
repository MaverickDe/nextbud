// import Head from "next/head";


// import Dashnav from "@/components/Layout/dashbaord";
// import Link from "next/link";
// import Image from "next/image";
// import dashim from "../public/images/images/dashim.svg";
// import sec from "../public/images/images/sec.svg";
// import Dash_nav from "@/components/Layout/dashnav";
// import { DELETEADMINURL, DOMAIN, GETADMINSURL, GETUSERSURL, RESTRICTADMINURL, UNRESTRICTADMINURL } from "@/components/const";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { object } from "yup";
// import { faCancel, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { CircularProgress } from "@mui/material";
// import { fetch_ } from "@/components/utils/utils";
// import { useAppSelector,AppDispatch } from "../redux/store/store";
// import { setadmins, updateadmins } from "@/redux/slices/admins";
// import { handleclose, setcentermodalhelper } from "@/redux/slices/centermodals";
// // setadmins

// // import Foote from "@/components/Home/";
// let timeout1 = null

// export default function Dash({ setSideToastHelper }) {
//   let UseAppDispatch = AppDispatch()
//   const {
//    admins


//   } = useAppSelector((state) => state.admins);
//     let [taskactive, settaskactive] = useState(false)
//   let router = useRouter()
//   // let [users, setusers] = useState([])
//   let [filter, setfilter] = useState(
//     ""
//   )


//   useEffect(
    
//    ()=>{ let v = async () => {

//       try {
      
      
//         let resp = await fetch_(GETADMINSURL, {
  
      
//           redirect: 'manual',
//           origin:DOMAIN,
//           mode:"cors",
       
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           referrerPolicy: "no-referrer"
        
//         })
      
//         let res = await resp.json()
//         if (res.redirect) {
//           router.push(res.redirect)
        
//         }
//         else if (res.admins) {
//           UseAppDispatch(
//           setadmins(res.admins))
        
//         }
//       } catch (e) {

      
//       }
    
//     }
//     v()
//     }, [])
//   // Link
//   // Image
//   return (
//     <>
//       <Head>
//       <title>
//         {"admins"}
//         </title>
//         <meta
//           name="description"
//           content = {"admins"}
//         />
//         <meta
//           property="og:title"
//           content={"admins"}
//         />
//         <meta
//           property="og:description"
//           content = {"admins"}
//         />
        
//       </Head>
//       <div className="flex relative h-[100vh]">
        
//               <Dashnav admin={true}  name={"admins"}/>
//               <section className=" h-inherit overflow-scroll w-full  bg-light1 dark:bg-dark1 px-5 text-secondary dark:text-secondary2 px-3 mb-5 ">
//                   <Dash_nav />
//                   <h1 className="text-center font-bold mb-10 text-[20px]">Admins</h1>
//                  <input  onChange={(e) => {
// let target = e.currentTarget
// clearTimeout(timeout1)
//             timeout1 = setTimeout(() => {
//   setfilter(target.value)
// },2000)
            
//                  }}   className="w-full max-w-[1000px] self-center h-[50px] my-5 rounded-md bg-white2 dark:bg-dark2 px-5 justify-self-center shadow-md " placeholder="search"/>
//                   <div className="w-full flex gap-10 flex-col">
                      
//                   {admins!="" && admins.filter(e=>Object.values(e).find(ee=>typeof ee === "string" && ee.toLowerCase().trim().includes(filter.toLowerCase().trim()))).map((e, index) => {
//                 return <div className="shadow-md p-5 w-full bg-secondary2 dark:bg-secondary rounded-md flex justify-between " href="/" key={index}>
//                   <div className="flex gap-[10px] w-[calc(100%-150px)] max-w-[700px]">
//                   <Image src={sec} className="w-[40px]" alt="sds" priority
//                     loading="eager" />
//                   <div className="w-[90%]">
//                       <h1 className="text-[10px] md:text-[15px] w-[100%] truncate">{e.first_name} {e.last_name}</h1>
//                     <div className="flex gap-[20px]">
//                       {[{username:e.user_name,}].map((ee, indexx) => {
//                         return <>
//                           <div key={indexx}>

//                             <p className="text-[7px] text-[#737A85]">{ Object.keys(ee)[0]}</p>
//                           <p className="text-[7px] text-primary font-bold">{ Object.values(ee)[0]}</p>
//                           </div>
//                         </>
//                       })}


//                     </div>
                    
//                   </div>
//                     </div>
//                     <div className="flex gap-3 justify-center items-center w-[50px]">
//                     <div className="w-full"
//                       onClick=
//                       {async (eee) => {
//                       let btn = eee.currentTarget.querySelector(".btn")
//                       let prog = eee.currentTarget.querySelector(".prog")
//                       if (taskactive) {
//                         return
//                         }
                        

// UseAppDispatch(
//   setcentermodalhelper({
//     text: "Are you sure you want to delete this Admin",
//     caution:true,
//     ok: {
//       name: "Proceed",
//       action: async () => {
//         UseAppDispatch(handleclose());

//         try {
//           prog.classList.remove("hidden")
//           btn.classList.add("hidden")
//           // settaskactive(true)
          

//           let resp = await fetch_(DELETEADMINURL(e.userId), {
      
          
//             redirect: 'manual',
//             credentials: "include",
//                                 origin:DOMAIN,
//                                 mode:"cors",
           
//             credentials: "include",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             // referrerPolicy: "no-referrer"
            
//           })
          
//           // let res = await resp.json()
//           if (resp.status == 200) {
//             // let data = [ ...users ]
//             // data.splice(index,1)
//             // setusers(data)
           
//             setSideToastHelper("admin sucessfully deleted", true)
//             UseAppDispatch(
//               deleteadmins(
//                  {index})
//                )

//             // router.push(res.redirect)
            
//           }
//           else {
//             // settasks(res.tasks)
          
//             setSideToastHelper("admin failed to delete",false)
//           }
//         } catch (e) {
         
//           setSideToastHelper("admin failed to delete",false)
    
          
//         } finally {
//           prog.classList.add("hidden")
//           btn.classList.remove("hidden")
//           settaskactive(false)
//         }
     
//       },
//     },
//     cancel: {
//       name: "Cancel",
//       action: async () => {
//         UseAppDispatch(handleclose());
//       },
//     },
//     open: true,
//   })
// );





                  
                      
//                       }}
//                     >
//                       {/* <CircularProgress */}
//                       <div className=" prog hidden">
//                     <CircularProgress color="inherit"  size="1rem" />
//                         </div>
//                             <FontAwesomeIcon icon={faTrash} className={`text-primary btn   `} />
//                     {/* <FontAwesomeIcon icon={faC} className="text-primary"/> */}
//                       </div>
//                     <div className="w-full"
//                       onClick=
//                       {async (eee) => {
//                       let btn = eee.currentTarget.querySelector(".btn")
//                       let prog = eee.currentTarget.querySelector(".prog")
//                       let restrict =  !admins[index].is_restricted
//                       if (taskactive) {
//                         return
//                       }
//                       try {
//                         prog.classList.remove("hidden")
//                         btn.classList.add("hidden")
//                         // settaskactive(true)
                        
      
//                         let resp = await fetch_(restrict?  RESTRICTADMINURL(e.userId) :UNRESTRICTADMINURL(e.userId), {
                    
                        
//                           redirect: 'manual',
//                           credentials: "include",
//                                               origin:DOMAIN,
//                                               mode:"cors",
                         
//                           credentials: "include",
//                           headers: {
//                             "Content-Type": "application/json",
//                           },
//                           // referrerPolicy: "no-referrer"
                          
//                         })
                        
//                         // let res = await resp.json()
//                         if (resp.status == 200) {
                         
//                           //   let data = [...users]
//                           // data[index].is_restricted = restrict
                          
                          
//                           UseAppDispatch(
//                           updateadmins(
//                              {index,data:{is_restricted : restrict}})
//                            )
//                             // setusers(data)
                         
//                           setSideToastHelper(restrict?"admin restricted":"admin unrestricted", true)

//                           // router.push(res.redirect)
                          
//                         }
//                         else {
//                           // settasks(res.tasks)
                        
//                           setSideToastHelper("an error occured",false)
//                         }
//                       } catch (e) {
//                           console.log(e)
                       
//                         setSideToastHelper("an error occured",false)
                  
                        
//                       } finally {
//                         prog.classList.add("hidden")
//                         btn.classList.remove("hidden")
//                         settaskactive(false)
//                       }
                      
//                       }}
//                     >
//                       {/* <CircularProgress */}
//                       <div className=" prog hidden">
//                     <CircularProgress color="inherit"  size="1rem" />
//                         </div>
//                     <FontAwesomeIcon icon={faCancel} className={` ${e.is_restricted?" text-[red] ":"text-primary"}  btn  `} />
//                     {/* <FontAwesomeIcon icon={faC} className="text-primary"/> */}
//                       </div>
                   
                
//                     {/* <button className="text-[#737A85] rounded-md py-2 px-5 w-fit shadow-md ">delete</button>
//                     <button className="text-[#737A85] rounded-md py-2 px-5 w-fit shadow-md ">clone</button>
//                     <button className="text-[#737A85] rounded-md py-2 px-5 w-fit shadow-md ">edit</button>
//                     <button className="text-[#737A85] rounded-md py-2 px-5 w-fit shadow-md ">{ ">"}</button> */}
                    

//                   </div>
                
//                 </div>
//               })}
                      
                      
                  
//               </div>
                  

//               </section>
//    </div>
    

//     </>
//   );
// }
