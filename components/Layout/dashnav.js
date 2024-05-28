import Link from "next/link";
import logo from "../../public/images/logo/shabee logo_040548.png";
import insta from "../../public/images/images/insta.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
import { gelasio } from "@/fonts/general_fonts";
import { useEffect, useState, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircle,
  faCircleHalfStroke,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { DOMAIN, GETTASKSURL, GETUSERURL, LOGOUTURL, WEBTITLE } from "../const";
import { Contextapi1 } from "@/contextApi/context2";
import { useRouter } from "next/router";
import { fetch_ } from "../utils/utils";
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { setuser } from "@/redux/slices/user";
import { setmenu2 } from "@/redux/slices/menu_activator";
// setuser

// import { Loader1 } from "../utils/loader";
// import { Contextapi1 } from "@/contextApi/context2";

// import { BASEURL } from "@/helpers/constant";

const Dash_nav = ({ admin = false }) => {
  let UseAppDispatch = AppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { menu2 } = useAppSelector((state) => state.menu);
  const router = useRouter();

  useEffect(() => {
    let v3 = async () => {
      try {
        if (user && user.user_name) {
          return;
        }

        let resp = await fetch_(GETUSERURL, {
          redirect: "manual",

          credentials: "include",
          mode: "cors",
          origin: DOMAIN,
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer",
        });

        let res = await resp.json();
        if (res.redirect) {
          router.push(res.redirect);
        } else if (res.user) {
          UseAppDispatch(setuser(res.user));
        }
      } catch (e) {}
    };
    v3();
  }, []);
  let menuref = useRef(null);
  return (
    <section className=" w-full min-h-[40px]  py-5 px mb-5 ">
      <div className="flex w-full justify-between min-h-[40px] ">
        <h1>{WEBTITLE}</h1>
        <Link
          href={LOGOUTURL}
          onClick={() => {
            document.cookie = "auth2=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          }}
          className="text-primary"
        >
          log out
        </Link>
      </div>
      <div className="flex  w-full justify-between w-full mt-10">
        <p className="text-[20px]">
          {admin
            ? "Admin"
            : user.is_admin
            ? "Admin"
            : user.user_name
            ? user.user_name
            : "User"}
        </p>
        <div className="flex gap-5 ">
          <FontAwesomeIcon
            onClick={(e) => {
              let html = document.querySelector("html");
              if (html.classList.contains("dark")) {
                html.classList.remove("dark");
                
                localStorage.setItem("darkmode", "false");
              } else {
                html.classList.add("dark");
                localStorage.setItem("darkmode", "true");
              }
            }}
            icon={faCircleHalfStroke}
            className="text-primary btn w-[20px] "
          />

          <FontAwesomeIcon
            icon={menu2 ? faX : faBars}
            className="text-primary btn w-[20px] md:hidden  "
            onClick={async () => {
              UseAppDispatch(setmenu2());
            }}
          />

          {/* <i className="fa-solid fa-circle-half-stroke text-primary"></i> */}

          {/* <i className="fa-solid fa-bars text-primary "></i> */}
        </div>
      </div>
      <div className="flex  w-full justify-between w-full ">
        {(user.restricted && (
          <p className="text-[17px] text-[red]">Account restricted</p>
        )) ||
          (user.Strike && user.Strike.strike > 0 && (
            <div>
              <p className="text-[17px] text-[red]">Warning</p>
              <p className="text-[9px] text-[red]">
                you are violating the platform rules
              </p>
              <p className="text-[9px] text-[red]">
                your account is risked being banned
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Dash_nav;
