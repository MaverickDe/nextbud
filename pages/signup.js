// import Head from "next/head";

// import Footer from "@/components/Layout/Footer";
// import Mainnav from "@/components/Layout/mainnav";
// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useRouter } from "next/router";
// import { useAppSelector, AppDispatch } from "../redux/store/store";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCancel,
//   faCheckCircle,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import CircularProgress from "@mui/material/CircularProgress";

// import {
//   DOMAIN,
//   SERVERSIGNUPURL,
//   WEBTITLE,
//   countries,
// } from "@/components/const";
// import { redirect } from "next/navigation";
// // import Link from "next/link";
// import { Modal } from "@mui/material";

// import TERMS from "@/data/terms_and_conditions";
// import { fetch_, setErrorHelper } from "@/components/utils/utils";
// import { revertAll } from "@/redux/actions/actions";
// const getCharacterValidationError = (str) => {
//   return `Your password must have at least 1 ${str} character`;
// };
// const {
//   object,
//   string,
//   number,
//   date,
//   InferType,
//   ref,
//   boolean,
// } = require("yup");
// let userSignupSchema = object({
//   user_name: string().required("Please enter  user name").max(30),
//   phone: string().required("Please enter  a phone number"),
//   country: string().required("Please enter  a country"),
//   state: string().required("Please enter  a state"),
//   gender: string().required("Please choose a gender"),
//   first_name: string().required("Please enter  firstName"),
//   last_name: string().required("Please enter lastName"),

//   email: string().email().required("Please enter a password"),
//   termsandcon: string().required("please accept terms and condition"),
//   password: string()
//     .required("Please enter a password")
//     // check minimum characters
//     .min(8, "Password must have at least 8 characters")

//     .matches(/[0-9]/, getCharacterValidationError("digit"))
//     .matches(/[a-z]/, getCharacterValidationError("lowercase"))
//     .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
//   confirm_password: string()
//     .required("Please re-type your password")
//     // use oneOf to match one of the values inside the array.
//     // use "ref" to get the value of passwrod.
//     .oneOf([ref("password")], "Passwords does not match"),
// });

// let passwordSchema = object({
//   password: string()
//     .required("Please enter a password")
//     // check minimum characters
//     .min(8, "Password must have at least 8 characters")

//     .matches(/[0-9]/, getCharacterValidationError("digit"))
//     .matches(/[a-z]/, getCharacterValidationError("lowercase"))
//     .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
// });
// let comfirmSchema = object({
//   password: string(),
//   confirm_password: string()
//     .required("Please re-type your password")
//     // use oneOf to match one of the values inside the array.
//     // use "ref" to get the value of passwrod.
//     .oneOf([ref("password")], "Passwords does not match"),
// });

// // import Foote from "@/components/Home/";

// export default function Home() {
//   let UseAppDispatch = AppDispatch();
//   const router = useRouter();
//   let [referal, setreferal] = useState(null);
//   let [modaltoggle, setmodaltoggle] = useState(false);

//   useEffect(() => {
//     if (router.isReady) {
//       if (router.query && router.query.referal) {
//         setreferal(router.query.referal);
//       }
//     }
//     // setcentermodalhelper("open" ,true)
//   }, [router]);

//   let [data, setdata] = useState({
//     phone: { value: "", timeout1: null, error: "" },
//     country: { value: "Nigeria", timeout1: null, error: "" },
//     gender: { value: "Male", timeout1: null, error: "" },
//     state: { value: "", timeout1: null, error: "" },
//     first_name: { value: "", timeout1: null, error: "" },
//     last_name: { value: "", timeout1: null, error: "" },
//     user_name: { value: "", timeout1: null, error: "" },
//     password: { value: "", timeout1: null, error: true },
//     email: { value: "", timeout1: null, error: "" },
//     confirm_password: { value: "", timeout1: null, error: true },
//     termsandcon: { value: "", timeout1: null, error: true },
//   });

//   let [error, seterror] = useState("");

//   let setdatahelper = (key) => {
//     return (value) => {
//       let data_ = { ...data };
//       data_[key] = value;
//       setdata(data_);
//     };
//   };
//   return (
//     <div className="flex flex-col min-h-[100vh] bg-secondary2 dark:bg-secondary   ">
//       <Head>
//         <title>{WEBTITLE + "sign up"}</title>
//         <meta name="description" content={"sign up"} />
//         <meta property="og:title" content={WEBTITLE + ` sign up`} />
//         <meta property="og:description" content={"sign up"} />
//       </Head>
//       {/* <Layout> */}
//       <Mainnav />
//       <div className="flex flex-col justify-center items-center w-full">
//         <Modal
//           open={modaltoggle}
//           // onClose={}
//         >
//           <div className="w-full px-5 bg-secondary2 dark:bg-secondary overflow-y-scroll h-full">
//             <FontAwesomeIcon
//               className="w-[20px] my-5"
//               icon={faCancel}
//               onClick={(e) => {
//                 setmodaltoggle(false);
//               }}
//             />
//             <div>
//               <TERMS />
//             </div>
//           </div>
//         </Modal>

//         <form className="w-full max-w-[500px] flex flex-col gap-10 px-3 mt-10  ">
//           <h1 className="mt-5 font-bold text-[25px]">Sign up</h1>

//           <div className="w-full ">
//             <label>User name</label>
//             <div className="error w-full min-h-[50px] text-red"></div>
//             <input
//               maxLength={"30"}
//               value={data.user_name.value}
//               onChange={(e) => {
//                 setdatahelper("user_name")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//               placeholder="john"
//               type="text"
//             />
//           </div>
//           <div className="w-full ">
//             <label>First name</label>
//             <input
//               value={data.first_name.value}
//               onChange={(e) => {
//                 setdatahelper("first_name")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//               placeholder="prince"
//               type="text"
//             />
//           </div>
//           <div className="w-full ">
//             <label>Last name</label>
//             <input
//               value={data.last_name.value}
//               onChange={(e) => {
//                 setdatahelper("last_name")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//               placeholder="murphy"
//               type="text"
//             />
//           </div>

//           <div className="w-full ">
//             <label>Gender</label>
//             <select
//               value={data.gender.value}
//               onChange={(e) => {
//                 setdatahelper("gender")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//             >
//               {["Male", "Female"].map((e, index) => {
//                 return (
//                   <option key={index} value={e}>
//                     {e}
//                   </option>
//                 );
//               })}
//             </select>
//             {/* <input  placeholder="murphy"  type="text"/> */}
//           </div>
//           <div className="w-full ">
//             <label>Country</label>
//             <select
//               value={data.country.value}
//               onChange={(e) => {
//                 setdatahelper("country")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//             >
//               {countries.map((e, index) => {
//                 return (
//                   <option key={index} value={e.name}>
//                     {e.name}
//                   </option>
//                 );
//               })}
//             </select>
//             {/* <input  placeholder="murphy"  type="text"/> */}
//           </div>
//           <div className="w-full ">
//             <label>State</label>
//             <input
//               value={data.state.value}
//               onChange={(e) => {
//                 setdatahelper("state")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//               placeholder="lagos"
//               type="text"
//             />
//           </div>
//           <div className="w-full ">
//             <label>Phone number</label>
//             <input
//               value={data.phone.value}
//               onChange={(e) => {
//                 setdatahelper("phone")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//               placeholder="08139220"
//               type="text"
//             />
//           </div>
//           <div className="w-full ">
//             <label>Email</label>
//             <input
//               value={data.email.value}
//               onChange={(e) => {
//                 setdatahelper("email")({ value: e.currentTarget.value });
//               }}
//               className="w-full shadow-md rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//               placeholder="example@gmial.com"
//               type="email"
//             />
//           </div>
//           <div>
//             <label className="mb-1">Password</label>
//             {data.password.error && (
//               <div className="err w-full min-h-[50px] text-[red]  ">
//                 {" "}
//                 {data.password.error}
//               </div>
//             )}

//             <div className="flex gap-5 justify-center items-center  shadow-md rounded-md bg-light2 dark:bg-dark2 pr-2">
//               <input
//                 value={data.password.value}
//                 onChange={async (e) => {
//                   if (data.password.timeout1) {
//                     clearTimeout(data.password.timeout1);
//                   }
//                   let obj = {};
//                   obj.value = e.currentTarget.value;

//                   let div =
//                     e.target.parentElement.parentElement.querySelector(".err");
//                   try {
//                     obj.error = null;
//                     const user = await passwordSchema.validate({
//                       password: e.target.value,
//                     });
//                   } catch (ee) {
//                     // div.textContent = ee.errors[ee.errors.length-1]
//                     // div.style.display = "flex"
//                     obj.error = ee.errors[ee.errors.length - 1];

//                     //  setErrorHelper(, ee.errors[ee.errors.length-1] );
//                   }
//                   // obj.timeout1 = setTimeout(() => {

//                   //     if (!data.password.error) {

//                   //         div.style.display = "none"
//                   //         div.textContent = ""
//                   //     }

//                   //  },1000)
//                   setdatahelper("password")(obj);
//                 }}
//                 className="mt-1 w-full  rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//                 placeholder="********"
//                 type="password"
//               />
//               <FontAwesomeIcon
//                 className="w-[20px]"
//                 icon={faEye}
//                 onClick={(e) => {
//                   let div =
//                     e.currentTarget.parentElement.querySelector("input");

//                   if (div.getAttribute("type") == "password") {
//                     div.setAttribute("type", "text");
//                     e.currentTarget.classList.add("text-primary");
//                   } else {
//                     e.currentTarget.classList.remove("text-primary");
//                     div.setAttribute("type", "password");
//                   }
//                 }}
//               />
//             </div>
//           </div>
//           <div>
//             <label>confirm password</label>

//             {data.confirm_password.error && (
//               <div className="err w-full min-h-[50px] text-[red]  ">
//                 {data.confirm_password.error}
//               </div>
//             )}

//             <div className="flex gap-5 justify-center items-center  shadow-md rounded-md bg-light2 dark:bg-dark2 pr-2">
//               <input
//                 value={data.confirm_password.value}
//                 onChange={async (e) => {
//                   console.log(e.currentTarget.value, data.password.value);
//                   if (data.confirm_password.timeout1) {
//                     clearTimeout(data.confirm_password.timeout1);
//                   }
//                   let obj = {};
//                   obj.value = e.currentTarget.value;

//                   let div =
//                     e.target.parentElement.parentElement.querySelector(".err");
//                   try {
//                     obj.error = null;

//                     const user = await comfirmSchema.validate({
//                       confirm_password: e.currentTarget.value,
//                       password: data.password.value,
//                     });
//                     //   div.style.display = "none"
//                     //   div.textContent = ""
//                   } catch (ee) {
//                     //   console.log(ee)
//                     // div.textContent = ee.errors[ee.errors.length-1]
//                     // div.style.display = "flex"
//                     obj.error = ee.errors[ee.errors.length - 1];

//                     //  setErrorHelper(, ee.errors[ee.errors.length-1] );
//                   }
//                   // obj.timeout1 = setTimeout(() => {
//                   // if (!data.confirm_password.error) {

//                   //     div.style.display = "none"
//                   //     div.textContent = ""
//                   // }

//                   //  },1000)
//                   setdatahelper("confirm_password")(obj);
//                 }}
//                 className="mt-1 w-full  rounded-md bg-light2 dark:bg-dark2 h-[50px] p-3"
//                 placeholder="********"
//                 type="password"
//               />
//               {!data.confirm_password.error && (
//                 <FontAwesomeIcon
//                   icon={faCheckCircle}
//                   className="text-primary w-[20px]"
//                 />
//               )}
//               <FontAwesomeIcon
//                 icon={faEye}
//                 className="w-[20px]"
//                 onClick={(e) => {
//                   let div =
//                     e.currentTarget.parentElement.querySelector("input");

//                   if (div.getAttribute("type") == "password") {
//                     div.setAttribute("type", "text");
//                     e.currentTarget.classList.add("text-primary");
//                   } else {
//                     e.currentTarget.classList.remove("text-primary");
//                     div.setAttribute("type", "password");
//                   }
//                 }}
//               />
//             </div>
//           </div>

//           <div className=" flex gap-5 ">
//             <input
//               onClick={(e) => {
//                 console.log(e.target.checked);

//                 setdatahelper("termsandcon")({
//                   value: e.target.checked ? "checked" : "",
//                 });
//               }}
//               className="  rounded-md bg-light2 dark:bg-dark2  p-3"
//               type="checkbox"
//             />
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 setmodaltoggle(true);
//               }}
//             >
//               Accept <span className="text-[blue]">Terms and Condition</span>
//             </button>
//           </div>

//           <button
//             onClick={async (e) => {
//               let target = e.currentTarget;

//               e.preventDefault();

//               let obj = {};
//               Object.keys(data).forEach((e) => {
//                 obj[e] = data[e].value;
//               });
//               try {
//                 const user = await userSignupSchema.validate(obj);
//               } catch (e) {
//                 return setErrorHelper(e.errors[e.errors.length - 1]);
//               }

//               try {
//                 //   let obj_ = {...obj}
//                 if (referal) {
//                   obj.referal = referal;
//                 }
//                 target.disabled = true;
//                 target
//                   .querySelector(".submitprogress")
//                   .classList.remove("hidden");
//                 console.log(obj);
//                 let resp = await fetch_(SERVERSIGNUPURL, {
//                   method: "post",
//                   redirect: "manual",
//                   body: JSON.stringify(obj),
//                   credentials: "include",
//                   origin: DOMAIN,
//                   mode: "cors",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                 });
//                 try {
//                   let res = await resp.json();
//                   if (res.token) {
//                     document.cookie = `auth2=${res.token}`;
//                   }
//                   if (resp.status == 200) {
//                     UseAppDispatch(revertAll());
//                   }

//                   if (res.redirect) {
//                     router.push(res.redirect);
//                     //    redirect(res.redirect)
//                   }
//                   if (res.errmsg) {
//                     return setErrorHelper(res.errmsg);
//                   }
//                 } catch (e) {}
//                 if (resp.status != 200) {
//                   return setErrorHelper("Error in performing action");
//                 }
//               } catch (e) {
//                 if (e.errmsg) {
//                   return setErrorHelper(e.errormsg);
//                 }
//                 return setErrorHelper("Error in performing action");
//               } finally {
//                 target.disabled = false;
//                 setTimeout(() => {
//                   target
//                     .querySelector(".submitprogress")
//                     .classList.add("hidden");
//                 }, 1000);
//               }
//             }}
//             className="submitbtn bg-secondary text-primary dark:bg-primary dark:text-secondary shadow-md rounded-md w-fit px-5 py-2 flex gap-2 justify-center items-center"
//           >
//             <span>sign up</span>

//             <div className="submitprogress hidden">
//               <CircularProgress color="inherit" size="1rem" />
//             </div>
//           </button>
//           <div className="flex flex-col gap-5 m-3">
//             {/* <Link href="/login">login</Link>
//               <Link href="/adminlogin">admin login</Link> */}
//           </div>
//         </form>
//       </div>

//       <Footer />
//       {/* <Overview />

//         <Solution />
//         <Testimonial /> */}
//       {/* </Layout> */}
//     </div>
//   );
// }
