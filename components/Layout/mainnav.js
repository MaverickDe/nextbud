import Link from "next/link";
import logo from "../../public/images/logo/logo1.svg";
// import insta from "../../public/images/images/insta.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
import { gelasio } from "@/fonts/general_fonts";
// Menu
import { useEffect, useState, useContext, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCancel,
  faCircleHalfStroke,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { DOMAIN, GETUSERURL, WEBTITLE } from "../const";
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { setmenu1 } from "@/redux/slices/menu_activator";
import { fetch_ } from "../utils/utils";
import { setuser } from "@/redux/slices/user";

// import { Loader1 } from "../utils/loader";
// import { Contextapi1 } from "@/contextApi/context2";

// import { BASEURL } from "@/helpers/constant";
const Nav = () => {
  const router = useRouter();
  let UseAppDispatch = AppDispatch();
  const { menu1 } = useAppSelector((state) => state.menu);


  const {
    user
 
 
   } = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   if (user.user_name) {
  //     if (user.is_admin) {
  //       router.push("/admin")
        
  //     } else {
  //       router.push("/user")
  //     }
       
  //    }
  //  },[user])
  // useEffect(() => {
  //   let v3 =  async () => {

  //     try {
  //       if (user && user.user_name) {
  //         return;
  //       }
  //     // GETUSERSURL
      
  //       let resp = await fetch_(GETUSERURL, {
  
      
  //         redirect: 'manual',
       
  //         credentials: "include",
  //         mode: "cors",
  //         origin:DOMAIN,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         referrerPolicy: "no-referrer"
        
  //       })
      
  //       let res = await resp.json()
  //       if (res.redirect) {
  //         // router.push(res.redirect)
        
  //       }
  //       else if (res.user) {
  //         UseAppDispatch(

  //           setuser(res.user)
  //         )
        
  //       }
  //     } catch (e) {

      
  //     }
    
  //     }
  //   v3()
  // }, [])
  return (
    <section className="w-full fixed top-[0px]   left-[0px]  z-30 box-border">
      <section className="w-full bg-[rgba(255,255,255,0.9)] backdrop-blur-sm  box-b relative text-[black] min-h-[40px] box-border flex  justify-between items-center px-5 py-5">
        <div className="flex justify-center items-center gap-[10px]">
          <Link
            className="flex justify-center items-center gap-[10px]"
            href="/"
            onClick={() => {
              UseAppDispatch(setmenu1(false));
            }}
          >
            <Image
              alt="image"
              src={logo}
              className=" w-[150px]"
              priority
              loading="eager"
            />
        
          </Link>
        </div>
        <div className=" flex gap-[30px]  max-md:hidden font-nueuthin  justify-center md:items-center">
              {[
                { link: "/#aboutus", name: "About us" },
                { link: "/#features", name: "Product Features" },
                { link: "#privacy", name: "Contact us" },
              ].map((e, index) => {
                return (
                  <Link
                    className="w-fit"
                    onClick={() => {

                      // UseAppDispatch(setmenu1());
                    }}
                    key={index}
                    href={e.link}
                  >
                    {e.name}
                  </Link>
                );
              })}
            </div>
            <div className=" max-md:hidden text-primary flex gap-[10px] flex-col md:flex-row  justify-center md:items-center ">
        
              <Link
                onClick={() => {
                  UseAppDispatch(setmenu1(false));
                }}
                className="w-full md:w-fit bg-[black] text-[white] rounded-md px-10 py-3 flex justify-center items-center"
                href={"/signup"}
              >
               Become an Influencer
              </Link>
          
            </div>
        <div
          onClick={() => {
            UseAppDispatch(setmenu1(false));
          }}
          className={`  ${
            menu1 ? "max-md:menu_active" : "max-md:menu_con"
          }    w-full md:hidden   h-[100vh] md:h-fit  absolute md:static  z-10   top-[100%] left-0 flex flex-col md:flex-row gap-[30px] md:justify-end  md:items-end `}
        >
          <div
            data-open="0"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`    h-full  bg-[white]    w-full  flex flex-col     md:flex-row gap-[30px] md:justify-center  md:items-center p-5 md:p-0`}
          >
            <div className="text-[black] flex gap-[10px] flex-col md:flex-row  justify-center md:items-center">
              {[
                { link: "/#aboutus", name: "About us" },
                { link: "/#features", name: "Product Features" },
                { link: "/privacy", name: "Contact us" },
              ].map((e, index) => {
                return (
                  <Link
                    className="w-fit"
                    onClick={() => {
                      UseAppDispatch(setmenu1(false));
                    }}
                    key={index}
                    href={e.link}
                  >
                    {e.name}
                  </Link>
                );
              })}
            </div>
            <div className="text-primary flex gap-[10px] flex-col md:flex-row  justify-center md:items-center ">
        
              <Link
                onClick={() => {
                  UseAppDispatch(setmenu1(false));
                }}
                className="w-full md:w-fit bg-[black] text-[white] rounded-md px-10 py-1.5 flex justify-center items-center"
                href={"/signup"}
              >
               Become an Influencer
              </Link>
          
            </div>
          </div>
        </div>
        <div
          className="menu visible md:hidden  w-[20px]"
          onClick={() => {
            UseAppDispatch(setmenu1(!menu1));
            // let open = +menuref.current.dataset.open
            // console.log(open ,)
            // open ? open = 0 :open =1
            // console.log(open,)
            // // menuref.current.style.display="flex"
            // menuref.current.classList.remove("hidden")
            // if (!open) {
            //   menuref.current.classList.remove("max-md:animate-slideinright")
            //   menuref.current.classList.add("max-md:animate-slideinleft")
            // }
            // else {
            //   menuref.current.classList.remove("max-md:animate-slideinleft")
            //   menuref.current.classList.add("max-md:animate-slideinright")

            //     // menuref.classList.add("slidein")
            // }
            // menuref.current.dataset.open = `${open}`
          }}
        >
          <FontAwesomeIcon
            icon={menu1 ? faX : faBars}
            className="text-[black]"
          />
          {/* <i className="fa-solid fa-bars text-primary "></i> */}
        </div>
      </section>
    </section>
  );
};

export default Nav;
