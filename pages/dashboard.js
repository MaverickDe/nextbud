import logo from "@/public/images/logo/logo5.svg";
import house from "@/public/images/images/house.svg";
import person from "@/public/images/images/person.svg";
import wallet from "@/public/images/images/wallet.svg";
import c_up from "@/public/images/images/c_up.svg";
import c_down from "@/public/images/images/c_down.svg";
import copy from "@/public/images/images/copy.svg";
import Image from "next/image";
import SelectMenu from "@/components/Layout/UIcomponent/selectMenu";
import { Select, SelectItem } from "@nextui-org/react";
// import {Button} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCheck,
  faClose,
  faLessThanEqual,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, AppDispatch } from "@/redux/store/store";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";
import { handleclose, setcentermodalhelper } from "@/redux/slices/centermodals";
import { Modal } from "@mui/material";

export default function Dashboard() {
  let [loading1, setLoading1] = useState(false);
  let [copy1, setcopy1] = useState(false);
  let [modal, setmodal] = useState(false);
  let UseAppDispatch = AppDispatch();
    let router = useRouter();
    let { currentUser, isLoggedin } = useAppSelector((state) => state.authUser);
  let { fullname, email, id, refCode } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (isLoggedin) {
      // router.push("/dashboard")
    }
  }, [isLoggedin]);
  let [data, setdata] = useState({
    bank: "",
    amount: "",
    accountNumber: "",
    accountName: "",
  });
  let [selectItem, setselectItem] = useState("");
  console.log(",,", fullname, email, "ll");

  return (
    <div className="w-full bg-[blue] ">
      <Modal open={modal}>
        <div className="w-full h-full flex flex-col justify-center items-center  ">
          <div className="w-full flex flex-col gap-10 max-w-[1000px] bg-[white] p-5 relative rounded-md pt-20 ">
            <FontAwesomeIcon
              onClick={() => {
                setmodal(false);
              }}
              icon={faClose}
              className="text-[black] btn absolute top-[10px] right-[10px] w-[20px]"
            />

            <input
              onChange={(ee) => {
                setdata({ ...data, amount: ee.currentTarget.value });
              }}
              value={data.amount}
              className="bg-light2 dark:bg-[#16171F]  border-[1px] rounded-md w-full h-fit min-h-[50px]   px-5"
              placeholder={"amount"}
              id={"amount"}
              type={"number"}
            />
            <input
              onChange={(ee) => {
                setdata({ ...data, bank: ee.currentTarget.value });
              }}
              value={data.bank}
              className="bg-light2 dark:bg-[#16171F]   border-[1px] rounded-md w-full h-fit min-h-[50px]   px-5"
              placeholder={"bank"}
              id={"bank"}
              type={"text"}
            />
            <input
              onChange={(ee) => {
                setdata({ ...data, accountNumber: ee.currentTarget.value });
              }}
              value={data.accountNumber}
              className="bg-light2 dark:bg-[#16171F]  border-[1px] rounded-md w-full h-fit min-h-[50px]   px-5"
              placeholder={"accountNumber"}
              id={"accountNumber"}
              type={"number"}
            />
            <input
              onChange={(ee) => {
                setdata({ ...data, accountName: ee.currentTarget.value });
              }}
              value={data.accountName}
              className="bg-light2 dark:bg-[#16171F] border-[1px] rounded-md w-full h-fit min-h-[50px]   px-5"
              placeholder={"accountName"}
              id={"accountName"}
              type={"text"}
            />

            <div className="w-full flex mt-20 justify-between">
              <Button
                onClick={async () => {
                  try {
                    setLoading1(true);
                    console.log(data);

                    UseAppDispatch(
                      setcentermodalhelper({
                        head: "Transaction Processing",
                        text: "Your Transaction will be completed within the next 48 hours",

                        ok: {
                          name: "continue",
                          action: () => {},
                        },

                        open: true,
                      })
                    );
                  } catch (e) {
                    if (e.message) {
                      setErrorHelper(e.message);
                    }

                    console.log(e);
                  } finally {
                    setTimeout(() => {
                      setLoading1(false);
                    }, 2000);
                  }
                }}
                isLoading={loading1}
                variant="faded"
                className="bg-[#DDDDDD] text-[#878787] rounded-md w-full p-3 h-[50px] mt-[20px]"
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
              >
                Withdraw
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="bg-[black] w-full block pt-[100px] max-md:pt-[150px] ">
        <div className="text-[white] p-5 absolute left-0 px-10 top-0 rounded-b-[100px]   max-md:rounded-b-[50px] bg-[black]  flex justify-between items-center mb-[50px] max-md:flex-col max-md:gap-5 w-full">
          <div className="flex gap-20 justify-center items-center ">
            <div className="flex flex-col items-center justify-center">
              <Image
                alt="image"
                src={logo}
                className=" w-[170px]"
                priority
                loading="eager"
              />
              {/* <p>Influencers</p> */}
            </div>
            <button className="  font-nueuthin flex gap-3 justify-center items-center px-5 rounded-full bg-[#2F2F2F] h-[40px] ">
              <Image
                alt="image"
                src={house}
                className=" w-[18px]"
                priority
                loading="eager"
              />
              <p className="mr-5">Dashboard</p>
            </button>
          </div>

          {/* <select>
                    <option>
                    <Image
              alt="image"
              src={person}
              className=" w-[170px] p-5"
              priority
              loading="eager"
                        />
                        <p>Grace Leihn</p>
                    </option>
                </select> */}
          <div className="max-md:self-end flex font-nueuthin  max-w-xs  gap-2 items-center px-5 rounded-md bg-[#2F2F2F] h-[40px]">
            <div className="flex gap-5 items-center">
              <Image
                alt="image"
                src={person}
                className="  "
                priority
                loading="eager"
              />
              <p>{fullname}</p>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  <FontAwesomeIcon
                    className="w-[15px] text-[white]"
                    icon={faCaretDown}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {/* <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem> */}
                <DropdownItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                >
                  <div
                    onClick={async () => {
                      await signOut(auth);
                      router.push("/");
                    }}
                    className="w-full px-5 rounded-md bg-[#2F2F2F] h-[40px] text-[white] font-nueuthin flex items-center justify-center"
                  >
                    Log out
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="rounded-t-[100px]  max-md:rounded-t-[50px]   flex-col gap-5 bg-[white] min-h-[500px]  font-nueuthin px-10 py-[100px]">
          <div>
            <p className="mb-20">Welcome {fullname.split(" ")[0]}!</p>
          </div>
          <div className="w-full flex justify-between mb-10">
            <div>
              <p>Current Balance</p>
              <h1 className="font-nueubig text-[30px] max-sm:text-[23px]">
                &#x24;00.00
              </h1>
            </div>
            <div>
              <button
                onClick={async (eee) => {
                  // let btn = eee.currentTarget.querySelector(".btn")
                  setmodal(true);
                }}
                className="bg-[#7A35F1] flex gap-3 px-3 h-[45px] rounded-md text-[white] items-center justify-center"
              >
                <Image
                  alt="image"
                  src={wallet}
                  className="  "
                  priority
                  loading="eager"
                />
                <span>Withdraw funds</span>
              </button>
            </div>
          </div>
          <div className="w-full rounded-[50px] px-[25px] py-[50px] bg-[#F6F6F6]">
            <div>
              <h2 className="font-nueubig">Overview</h2>
              <p>View all statistics and revenue</p>
            </div>

            <div className="flex gap-5 flex max-xl:flex-col justify-between w-full mt-20 ">
              {[
                [
                  {
                    head: "Total Suscribed Users",
                    number: "0",
                    arrowicon: c_up,
                    percent: "0",
                    time: "than yesterday",
                  },
                  {
                    head: "New Subscriber (24hrs)",
                    number: "0",
                    arrowicon: c_up,
                    percent: "0%",
                    time: "than yesterday",
                  },
                ],
                [
                  {
                    head: "Total Withdrawal",
                    number: "0",
                    arrowicon: c_up,
                    percent: "0",
                    time: "than last week",
                  },
                  {
                    head: "Last Withdrawal",
                    number: "0",
                    arrowicon: c_down,
                    down: true,
                    percent: "0%",
                    time: "than yesterday",
                  },
                ],
              ].map((ee, indexx) => {
                return (
                  <div
                    className="flex max-md:flex-col w-full gap-5"
                    key={indexx}
                  >
                    {ee.map((e, index) => {
                      return (
                        <div
                          key={index}
                          className="p-5 flex flex-col w-full  h-[170px] rounded-[40px] bg-[white] justify-between"
                        >
                          <p>{e.head}</p>
                          <h1 className="font-nueubig text-[30px]">
                            {e.number}
                          </h1>
                          <div className="font-nueuthin flex w-full justify-between items-center">
                            <div className="flex gap-5 justify-between items-center">
                              <Image
                                alt="image"
                                src={e.arrowicon}
                                className="  "
                                priority
                                loading="eager"
                              />
                              <span
                                className={`${
                                  e.down ? "text-[red]" : "text-[green]"
                                }`}
                              >
                                {e.percent}
                              </span>
                            </div>
                            <p className="text-[#878787]">{e.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="my-10">
              <p className="mb-3">Your unique referal code</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(refCode || "");
                  setcopy1(true);
                  setTimeout(() => {
                    setcopy1(false);
                  }, 2000);
                }}
                className="bg-[#8CE1FF] flex gap-3 px-3 h-[45px] rounded-full text-[black] items-center justify-center"
              >
                <span className="text-[25px]">{refCode || ""}</span>
                {(copy1 && (
                  <FontAwesomeIcon
                    className="text-[black] w-[15px]"
                    icon={faCheck}
                  />
                )) || (
                  <Image
                    alt="image"
                    src={copy}
                    className="  "
                    priority
                    loading="eager"
                  />
                )}
              </button>
            </div>
            <div></div>
            <p>Withdrawal history</p>
          </div>
        </div>
      </div>
    </div>
  );
}
