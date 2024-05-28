import Link from "next/link";
import logo from "../../public/images/logo/shabee logo_040548.png";

import Image from "next/image";
import { Modal } from "@mui/material";
import { gelasio } from "@/fonts/general_fonts";
import { useEffect, useState, useContext, useRef } from "react";

import { DOMAIN, GETUSERURL, LOGOUTURL, WEBCONTACT } from "../const";
import { Contextapi1 } from "@/contextApi/context2";
import { faBullhorn, faCancel, faCoins, faHouse, faListCheck, faMoneyBillTransfer, faPhoneSquare, faPhoneSquareAlt, faShieldHalved, faSquare, faSquarePlus, faUser, faUsersLine, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Rules from "@/data/rules";
import { fetch_ } from "../utils/utils";
import { useAppSelector,AppDispatch } from "@/redux/store/store";
import { setuser } from "@/redux/slices/user";
import { setmenu2 } from "@/redux/slices/menu_activator";


// setuser
// import { Loader1 } from "../utils/loader";
// import { Contextapi1 } from "@/contextApi/context2";

// import { BASEURL } from "@/helpers/constant";

const Dashnav = ({ admin = false, name = "" }) => {
  const { menu2 } = useAppSelector((state) => state.menu);
  let UseAppDispatch = AppDispatch()
  const {
   user


  } = useAppSelector((state) => state.user);
    const router = useRouter()
    // let [user , setuser] =useState({})
    useEffect(() => {
      let v3 =  async () => {
  
        try {
          if (user && user.user_name) {
            return;
          }
        // GETUSERSURL
        
          let resp = await fetch_(GETUSERURL, {
    
        
            redirect: 'manual',
         
            credentials: "include",
            mode: "cors",
            origin:DOMAIN,
            headers: {
              "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer"
          
          })
        
          let res = await resp.json()
          if (res.redirect) {
            router.push(res.redirect)
          
          }
          else if (res.user) {
            UseAppDispatch(

              setuser(res.user)
            )
          
          }
        } catch (e) {
  
        
        }
      
        }
      v3()
    }, [])
    
    let [modaltoggle,setmodaltoggle] =useState(false)
    let ref = useRef(null)
    
  

    let menuref = useRef(null)
    let [obj, setObj] = useState([{ name: "dashboard", link: "/user", icon: faHouse },
        { name: "Task", link: "/tasks",icon:faListCheck },
        { name: "Profile", link: "/profile",icon:faUser },
        { name: "Wallet", link: "/wallet", icon: faWallet },
        {
            name: "Rules", action: () => {
            
                setmodaltoggle(true)
        }, icon: faWallet },
        {link:"/privacy",name:"Privacy" , icon: faShieldHalved},
        {link:`https://wa.me/${WEBCONTACT}`,name:"Support" ,target:"_blank", icon: faPhoneSquare}
    
    ])
    useEffect(() => {
        if (admin || user.is_admin) {
            setObj([{
                name: "Dashboard", link: "/admin",icon:faHouse
            }, { name: "Task", link: "/tasks2" ,icon:faListCheck},
                { name: "Users", link: "/users",icon:faUsersLine },
                { name: "Admins", link: "/admins",icon:faUsersLine ,superAdmin:true },
                { name: "Create admin", link: "/createadmin",icon:faUsersLine , superAdmin:true },
                { name: "Create task", link: "/createtask", icon: faSquarePlus },
                { name: "Currency", link: "/currency" ,icon:faCoins},
              { name: "Withdrawals", link: "/withdrawals", icon: faMoneyBillTransfer },
              { name: "Memo", link: "/memo", icon: faBullhorn }
            ])
            
        }
        
    },[])
    return (
        <>
              <Modal
        open={modaltoggle}
        // onClose={}
              >
                  <div className="w-full px-5 bg-secondary2 dark:bg-secondary overflow-y-scroll h-full">
                      <FontAwesomeIcon className="w-[20px] my-5" icon={faCancel} onClick={(e) => { setmodaltoggle(false) }} />
                      <div >
                          
                      <Rules/>
                      </div >
                      
                  </div>
                  
              </Modal>
        <section onClick={() => {
           UseAppDispatch(

            setmenu2()
          )
      }}  className={` ${menu2 ? "max-md:menu_active" : "max-md:menu_con"} max-md:w-full max-md:max-w-full w-[80%] left-[0px] absolute  md:static  hidden md:block max-w-[200px]  h-[100vh] shadow-md`}>
          <section onClick={(e) => {
            e.stopPropagation()
            
      }} className={`  w-[80%]  max-w-[200px] py-5 bg-secondary2 dark:bg-secondary h-full shadow-md`}>
          <div className="flex justify-center items-center w-full">
              
           <Image alt="image" src={logo} className="w-[50px]  mb-10 " priority
              loading="eager" />
          </div>
          <div className="w-full h-fit flex  flex-col items-center">
                    {obj.map((e, index) => {
                  return (
                    <button onClick={() => {
                      UseAppDispatch(

                        setmenu2()
                      )
                          if (e.action) {
                              e.action()
                              
                          }
                      if (e.link) {
                        if (e.target) {
                              let a  = document.createElement("a")
                          a.setAttribute("target", e.target)
                       
                          a.href = e.link
                          console.log(a)

                          a.click()
                        } else {
                          
                          router.push(e.link)
                            }
                              
                          }
                      }} key={index} className={`font-bold flex gap-[10px] py-3 px-2 w-full text-secondary flex gap-5 items-center  hover:bg-primary hover:text-secondary ${name.toLowerCase()==e.name.toLowerCase()?"bg-primary  dark:text-secondary":"dark:text-secondary2"} rounded-sm`} >
                          <FontAwesomeIcon  icon={e.icon} className="text-secondary dark:text-secondary2  btn  w-[15px]" />
                          <p>{e.name}</p>
                      </button>
                      
                      
                )
                 
              })}
              <button className="text-secondary py-3 rounded-md mt-10 content-center  bg-primary w-[80%] dark:text-primary font-bold ">
                  
                        <Link href={LOGOUTURL} onClick={() => {
                             document.cookie = "auth2=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
               }} className="text-secondary py-3 rounded-md mt-10 self-center  bg-primary w-full  font-bold ">
               log out
                  </Link>
              </button>
              
          </div>
          
    </section>
    </section>
      </>
  )
}

export default Dashnav;
