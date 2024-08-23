"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/Logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import SearchInput from "./SearchInput";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import { removeToken } from "@/redux/slices/token-slices";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
} from "react-instantsearch-dom";
import searchClient from "@/Helper/SearchClient";

const NavBar = () => {
  const [cartLength, setCartLength] = useState(0);
  const [auth, setAuth] = useState<string | null>(null);
  const pathname = usePathname();
  const { token } = useAppSelector((s) => s.token);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const AuthToken = token;
    setAuth(AuthToken);
  }, [auth, setAuth]);
  useEffect(() => {
    const fetchCartLength = () => {
      const cart = JSON.parse(localStorage.getItem("Cart") || "[]");
      setCartLength(cart.length);
    };

    fetchCartLength(); // Fetch initially

    const intervalId = setInterval(fetchCartLength, 500); // Update every second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);
  return (
    <div
      className={`h-20 bg-[#F6F7F8] flex items-center mx-5 mt-5 rounded-xl px-10 justify-between ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : ""
      }`}
    >
      {/* Left Side */}
      <div className="flex items-center justify-between gap-8">
        <div className="w-[40%]">
          {/* --------Logo------------ */}

          <Link href={"/"}>
            {" "}
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        {/* Search Location -------------------------------------- */}
        <div className=" flex items-center gap-5">
          <div className="w-[3px] bg-[#E5E8EC] h-8"></div>
          {/* <div className="flex flex-col items-center justify-center w-full">
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
          </div> */}
        </div>
        {/* ---------------------------------------Search Bar */}
        <div className="w-full">
          <InstantSearch
            searchClient={searchClient}
            indexName="Alias_Name_Index"
          >
            <SearchInput />
          </InstantSearch>
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
          <h3 className="text-[#FF5C04] flex items-center font-medium gap-1">
            <BiSolidOffer size={30} /> Offers
          </h3>
        </div>
        <div className="relative">
          <div className="bg-[#FF5C04] -top-2 left-3 text-sm text-center absolute rounded-full w-6 h-6 flex items-center justify-center text-white">
            <span>{cartLength}</span>
          </div>
          <Link href={"/Cart"} className=" flex items-center font-medium gap-1">
            <IoCartOutline size={30} /> Cart
          </Link>
        </div>
        <div>
          {!token ? (
            <Link
              href={"/login"}
              className=" flex items-center font-medium gap-1"
            >
              <FaRegUser size={30} /> Login
            </Link>
          ) : (
            <Link
              href={"/login"}
              onClick={() => {
                dispatch(removeToken());
              }}
              className=" flex items-center font-medium gap-1"
            >
              <FaRegUser size={30} /> Log Out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
