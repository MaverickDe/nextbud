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
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



export default function Dashboard() {
    
let [selectItem,setselectItem]= useState("")


    return <div className="w-full bg-[blue] ">
        <div className="bg-[black] w-full block pt-[100px] max-md:pt-[150px] ">
            <div className="text-[white] p-5 fixed left-0 px-10 top-0 rounded-b-[100px]   max-md:rounded-b-[50px] bg-[black]  flex justify-between items-center mb-[50px] max-md:flex-col max-md:gap-5 w-full">
                <div className="flex gap-20 justify-center items-center ">


                <div className="flex flex-col items-center justify-center">
                <Image
              alt="image"
              src={logo}
              className=" w-[170px"
              priority
              loading="eager"
                    />
                    {/* <p>Influencers</p> */}
                </div>
                <button className="  font-nueuthin flex gap-3 justify-center items-center px-5 rounded-full bg-[#2F2F2F] h-[40px] overflow-clip">
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
                        <p>Grace Leihn</p>
                    </div>
                    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered"  
        >
                                <FontAwesomeIcon className="w-[15px] text-[white]" icon={ faCaretDown} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" >
        {/* <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem> */}
        <DropdownItem key="logout" className="text-danger" color="danger">
                                <div className="w-full px-5 rounded-md bg-[#2F2F2F] h-[40px] text-[white] font-nueuthin flex items-center justify-center">
                                    
          Log out
            </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
</div>
                
            </div>
            <div className="rounded-t-[100px]  max-md:rounded-t-[50px]   flex-col gap-5 bg-[white] min-h-[500px]  font-nueuthin px-10 py-[100px]">
                <div>

                <p className="mb-20">Welcome Grace!</p>
                </div>
                <div className="w-full flex justify-between mb-10">
                    <div>
                    <p>Total Balance</p>
                <h1 className="font-nueubig text-[30px] max-sm:text-[23px]">&#x24;$800.99
</h1>
                        </div>
                    <div>
                        <button className="bg-[#7A35F1] flex gap-3 px-3 h-[45px] rounded-md text-[white] items-center justify-center">
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


                    {

                    [
                    [{head:"Invited Users (Today)",
                    number:"34",
                            arrowicon: c_up,
                    percent:"+2.5%",
                    time:"than yesterday"
                    },
                    {head:"Revenue Today",
                    number:"$4800.99",
                            arrowicon: c_up,
                    percent:"+2.5%",
                    time:"than yesterday"
                    },],[
                    {head:"Suscribed Users",
                    number:"34",
                            arrowicon: c_up,
                    percent:"+2.5%",
                    time:"than last week"
                    },
                    {head:"Total Invited USers",
                    number:"128",
                            arrowicon: c_down,
                    percent:"+2.5%",
                    time:"than yesterday"
                    },]

                            ].map((ee, indexx) => {
                            

                              return  <div className="flex max-md:flex-col w-full gap-5" key={indexx}>

                                    {ee.map((e,index) => {
                                        
                                        return <div key={index} className="p-5 flex flex-col w-full  h-[170px] rounded-md bg-[white] justify-between">
                                        <p>{e.head}</p>
                                        <h1 className="font-nueubig text-[30px]">{e.number}</h1>
                                            <div className="font-nueuthin flex w-full justify-between items-center">
                                                <div className="flex gap-5 justify-between items-center">
                                                <Image
                      alt="image"
                      src={e.arrowicon}
                      className="  "
                      priority
                      loading="eager"
                                    />
                                                    <span>{ e.percent}</span>
        
                                                </div>
                                                <p>{e.time }</p>
                                            </div>
        
                                        </div>


                                        
                                    })}
                                </div>


                          
                        
                    })
                    }
                    </div>
                    



                    <div className="my-10">
                        <p className="mb-3">Your unique referal code</p>
                        <button className="bg-[#8CE1FF] flex gap-3 px-3 h-[45px] rounded-full text-[black] items-center justify-center">
                        <span className="text-[25px]">GRACE012</span>
                        <Image
              alt="image"
              src={copy}
              className="  "
              priority
              loading="eager"
                            />
                           

                        </button>
                    </div>
                    <div>
                        
            </div>
            <p>Withdrawal history</p>

                </div>

            </div>
            
           

        </div>


    </div>
}