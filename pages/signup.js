import Fade from "@/components/Layout/slick/fade";
import RootLayout from "@/components/Layout/wrapper/layout1";
import RootLayout3 from "@/components/Layout/wrapper/layout2";
import phone1 from "@/public/images/images/phoneslide/phone1.svg";
import phone2 from "@/public/images/images/phoneslide/phone2.svg";
import phone3 from "@/public/images/images/phoneslide/phone3.svg";
import phone4 from "@/public/images/images/phoneslide/phone4.svg";
import phone5 from "@/public/images/images/phoneslide/phone5.svg";
import logo3 from "@/public/images/logo/logo3.svg";
import { Button } from "@nextui-org/react";
import { Button as bf } from "@mui/material";
import Image from "next/image";
import InputPassword from "@/components/Layout/UIcomponent/password.js";
import Input from "@/components/Layout/UIcomponent/input.js";
import CustomInput from "@/components/Layout/UIcomponent/input.js";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { useRouter } from "next/router";
import { auth } from "@/firebase/init";
import { addGeneral, readUniqueRef } from "@/firebase/firebase_func";
import { randomId, setErrorHelper } from "@/components/utils/utils";
import { setuser } from "@/redux/slices/user";
import { setcurrentUser, setisLoggedin } from "@/redux/slices/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
const {
  object,
  string,
  number,
  date,
  InferType,
  ref,
  boolean,
} = require("yup");
let userSignupSchema = object({
  fullname: string().required("Please enter  your full name").max(30),

  email: string().email().required("Please enter your email"),
  ref: string().email().required("Please enter your refCode"),

  password: string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")

    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  // confirm_password: string()
  //   .required("Please re-type your password")
  //   // use oneOf to match one of the values inside the array.
  //   // use "ref" to get the value of passwrod.
  //   .oneOf([ref("password")], "Passwords does not match"),
});

let timeout = null
export default function Signup() {
  let UseAppDispatch = AppDispatch();

  let router = useRouter();
  let { currentUser, isLoggedin } = useAppSelector((state) => state.authUser);
  console.log("jdjdjdj7777");
  let [loading, setLoading] = useState(false);
    let [loading1, setLoading1] = useState(false);
    let [uref , seturef] =useState(false)
  let [data, setdata] = useState({
    password: "",
    email: "",
    fullname: "",
    ref: "",
  });

  useEffect(() => {
    if (isLoggedin) {
      router.push("/dashboard");
    }
  }, [isLoggedin]);

  let setDatahelper = (key, val) => {
    let data_ = { ...data };
    data_[key] = val;
    setdata(data_);
  };
  return (
    <div className="w-full h-[100vh] relative flex flex-col ">
      <RootLayout3>
        <div className="w-full flex-col flex-1 md:overflow-y-auto flex justify-center  items-center	">
          <section className="w-full h-[100%] max-md:my-10     flex justify-center  items-center ">
            <div className="w-[50%] h-[100%]  max-lg:hidden flex-end mt-auto ">
              {/* <Image src={phone1}  className=" h-full " priority      loading="eager" /> */}
              <Fade>
                {[phone1, phone2, phone3, phone4, phone5].map((e, index) => {
                  return (
                    <Image
                      src={e}
                      key={index}
                      priority
                      className="h-full"
                      loading="eager"
                    />
                  );
                })}
              </Fade>
            </div>
            <div className="flex flex-col w-full max-w-[500px] md:h-[calc(100%-220px)] overflow-y-scroll px-5 gap-10 lg:mb-auto">
              <div>
                <h1 className="text-[30px]">Let’s Get Started!</h1>
                <p className="font-nueuthin">
                  Join us as we embark on a journey of connection, empowerment,
                  and celebration
                </p>
              </div>
              <div className="flex flex-col w-full   gap-5">
                <CustomInput
                  value={data.fullname}
                  onChange={(value) => {
                    console.log("jdjdjdj");
                    setDatahelper("fullname", value);
                  }}
                  className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6] rounded-[12px] mb-[4px]"
                  placeholder="Full name"
                  type="text"
                />
                <CustomInput
                  value={data.email}
                  onChange={(value) => {
                    setDatahelper("email", value);
                  }}
                  className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6] rounded-[12px] mb-[4px]"
                  placeholder="Email Address"
                  type="email"
                />
                              <CustomInput
                                   lastE={

                                    loading1 ?
                                    
                                  <svg
                                  className="animate-spin h-5 w-5 text-current"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    fill="currentColor"
                                  />
                                          </svg> : 

                                          uref ?
                                          <FontAwesomeIcon
                                          className="text-[black] w-[15px]"
                                          icon={faCheck}
                                        />
                                              :
                                          
                                          
                                          <></>
                                }
                                  value={data.ref}
                                  
                                  onChange={async (value) => {
                                      clearTimeout(timeout)
                                      console.log(uref)
                                      seturef(false)
                      
                                    timeout=  setTimeout(async () => {
                                          try {
                                              setLoading1(true)
                                          let b =    await readUniqueRef("profile",value)
                                          console.log(b,"bb")
                                              if (b) {
                                              seturef(true)
                                              } else {
                                                return setErrorHelper("This refCode has alreaddy being used");
                                          }
                                              
                                          } catch (e) {
                                              console.log(e)
                                          }
                                          finally {
                                              setLoading1(false)
                                          }
                                          
                                    }, 2000)
                                      console.log("Dd")
                    setDatahelper("ref", value);
                  }}
                  className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6] rounded-[12px] mb-[4px]"
                  placeholder="Ref code"
                  type="text"
                />
                {/* <CustomInput type ="input" className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6]" placeholder="Password" /> */}
                <InputPassword
                  value={data.password}
                  onChange={(value) => {
                    setDatahelper("password", value);
                  }}
                  className="bg-[#F6F6F6] font-nueuthin focus-within:border-[#F6F6F6] rounded-[12px] "
                                  placeholder="Password"
                                 
                />

                {/* <Input type={ "email"} placeholder="email" /> */}

                <Button
                  disabled={loading}
                  isLoading={loading}
                  variant="faded"
                  className="bg-[#DDDDDD] text-[#878787] rounded-[12px] w-full p-3 h-[50px] mt-[20px] "
                  spinner={
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  onClick={async () => {
                    try {
                      const user = await userSignupSchema.validate(data);
                    } catch (e) {
                      return setErrorHelper(e.errors[e.errors.length - 1]);
                    }

                      try {
                        
                          if (!uref) {
                            return setErrorHelper("please select a unique refCode");
                        }
                      setLoading(true);
                      console.log(data);

                      let v = await createUserWithEmailAndPassword(
                        auth,
                        data.email,
                        data.password
                          );
                        // let v = {
                        //     user: {
                        //         uid:randomId(12)
                        //     }
                        // }

                      console.log(v, "Ddd");
                      console.log(v.user.uid);
                      let obj = {
                        email: data.email,
                        fullname: data.fullname,
                        id: v.user.uid,
                        // refCode: randomId(6),
                        refCode: data.ref,
                      };

                      let c = await addGeneral(
                        `${v.user.uid}`,

                        obj,
                        "profile"
                      );
                      UseAppDispatch(setuser(obj));
                      UseAppDispatch(setisLoggedin(true));

                      UseAppDispatch(setcurrentUser(v.user));

                      router.push("/dashboard");
                    } catch (e) {
                      if (e.message) {
                        setErrorHelper(e.message);
                      }
                      console.error("Error adding document: ");

                      console.log(e);
                    } finally {
                      console.log("dkdkdkdk");
                      setTimeout(() => {
                        setLoading(false);
                      }, 2000);
                    }
                  }}
                >
                  Continue
                </Button>
              </div>
              <div>
                <p className=" text-[12px] mb-3  font-nueuthin">
                  <span>{"By selecting "}</span>
                  <b>{"Continue, "}</b>
                  {"I agree to Nextbud’s "}
                  <Link
                    href="/tos"
                    className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]"
                  >
                    {" Terms of condition"}
                  </Link>
                  {", "}
                  <Link
                    href="/acceptibilitypol"
                    className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]"
                  >
                    {"Acceptable use policy "}
                  </Link>
                  {", and "}
                  <Link
                    href="/privacy"
                    className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]"
                  >
                    {"Privacy Policy "}
                  </Link>
                  .
                </p>
                <p className=" flex gap-[3px]  items-center">
                  <span className="font-nueuthin">Already an Influencer?</span>
                  <Link
                    href="/login"
                    className="text-transparent bg-clip-text bg-[linear-gradient(-45deg,#6067FA,#9864F1)]"
                  >
                    Log in{" "}
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </RootLayout3>
    </div>
  );
}
