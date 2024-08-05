import Image from "next/image";
import React from "react";
import Logo from "../../../../public/Logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import SearchInput from "./SearchInput";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="h-20 bg-[#F6F7F8] flex items-center mx-5 mt-5 rounded-xl px-10 justify-between">
      {/* Left Side */}
      <div className="flex items-center justify-between gap-8">
        <div className="w-[40%]">
          {/* --------Logo------------ */}

          <Image src={Logo} alt="Logo" />
        </div>
        {/* Search Location -------------------------------------- */}
        <div className=" flex items-center gap-5">
          <div className="w-[3px] bg-[#E5E8EC] h-8"></div>
          <div className="flex flex-col items-center justify-center w-full">
            <form className="">
              <label
                htmlFor="countries"
                className=" flex  items-center gap-1 text-[#9CA3B1] text-sm font-medium"
              >
               <IoLocationOutline className="text-base" /> Select Location
              </label>
              <select
                id="countries"
                className="focus-within:outline-none bg-transparent border-none w-fit"
              >
                <option selected>New york</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
        </div>
        {/* ---------------------------------------Search Bar */}
        <div className="w-full">
          <SearchInput />
        </div>
      </div>
      {/* Right Side  */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col items-start justify-start">
          <p className="text-white bg-[#FF5C04] px-1 rounded-lg text-xs ms-3 -mb-2">
            New
          </p>
          <select className="w-fit bg-transparent border border-none   focus-within:outline-none text-gray-900 text-md rounded-lg focus:ring-none focus:border-none block  p-2.5">
            <option selected>HealthCare Services</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
        <h3 className="text-[#FF5C04] flex items-center font-medium gap-1"><BiSolidOffer size={30}/> Offers</h3>
        </div>
        <div>
        <h3 className=" flex items-center font-medium gap-1"><IoCartOutline size={30}/> Cart</h3>
        </div>
        <div>
        <h3 className=" flex items-center font-medium gap-1">
        <FaRegUser size={30}/> Login</h3>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
