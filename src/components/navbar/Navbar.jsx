import React from 'react'
import { GoBellFill } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

import Image from "next/image"


const Navbar = () => {
  return (
    <div className='w-full shadow-lg '>
      <div className="navbar w-[100%] h-[120px] flex justify-end py-[24px] lg:px-[50px] px-[20px] ">
        <div className="flex items-center gap-5">
          {/* search */}
          <div className="flex items-center relative">
            <span className="">
              <label htmlFor="search"></label>
              <input type="search" name="search" id="search" placeholder='Rechercher' className='border  border-icon rounded-[10px] py-2 px-1 focus:outline-none flex pl-[25px]' />
            </span>
            <span className="absolute right-5"><IoMdSearch /></span>
          </div>
          {/* alert */}
          <div className="relative text-icon">
            <div className=" text-[30px] lg:text-[39px]">
              <GoBellFill />
            </div>
            <div className="absolute text-[14px] top-[-6px] lg:top-[-8px] -right-1 text-black bg-first w-[18px] h-[18px] lg:w-[26px] lg:h-[26px] rounded-full flex justify-center items-center">
              <p className="">6</p>
            </div>
          </div>
          {/* message */}
          <div className="relative text-icon">
            <div className=" text-[30px] lg:text-[39px]">
             <FaEnvelope />
            </div>
            <div className="absolute text-[14px] top-[-6px] lg:top-[-8px] -right-1 bg-orange-300 w-[18px] h-[18px] lg:w-[26px] lg:h-[26px] rounded-full flex justify-center items-center">
              <p className="">6</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            {/* <div className="">
              <Image alt='user' src="/user.jpg" width={50} height={50} className=' w-[40px] h-[40px] rounded-full'/>
            </div> */}
            <div className="">
              <p className=" lg:text-[20px] font-semibold leading-[25.1px]">Fançois SAGB0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
