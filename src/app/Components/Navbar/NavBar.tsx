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
import { IoMdClose } from "react-icons/io";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
} from "react-instantsearch-dom";
import searchClient from "@/Helper/SearchClient";
import { MdMenuOpen } from "react-icons/md";
const NavBar = () => {
  const [cartLength, setCartLength] = useState(0);
  const [auth, setAuth] = useState<string | null>(null);
  const pathname = usePathname();
  const { token } = useAppSelector((s) => s.token);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
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
      className={`h-20 bg-[#F6F7F8] flex items-center mx-5 mt-5 rounded-xl lg:px-10 px-5 justify-between ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : ""
      }`}
    >
      <div className="flex lg:hidden items-center justify-between gap-4">
        <div>
          <SearchInput />
        </div>
        <div className="w-1/4 flex items-center justify-end">
          <span
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <MdMenuOpen size={40} />
          </span>
        </div>
      </div>
      <div
        className={` w-full bg-[#9FE870]  lg:bg-transparent transform transition-all duration-500 lg:relative fixed z-50 top-0 left-0 lg:h-auto h-screen 
         ${open ? "translate-x-0" : "-translate-x-[200%] lg:-translate-x-0"}`}
      >
        <div className="flex  lg:flex-row flex-col h-screen lg:h-auto lg:justify-between justify-evenly items-start lg:items-center px-10 lg:px-0 ">
          <div className="absolute top-10 right-12 lg:hidden ">
            <span
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              <IoMdClose size={40} />
            </span>
          </div>
          {/* Left Side */}
          <div className="flex items-center lg:justify-between  gap-8">
            <div className="lg:w-[40%] w-[60%]">
              {/* --------Logo------------ */}

              <Link href={"/"}>
                {" "}
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>

            {/* Search Location -------------------------------------- */}
            {/* <div className=" flex items-center gap-5">
              <div className="w-[3px] bg-[#E5E8EC] h-8"></div>
            </div> */}
            {/* ---------------------------------------Search Bar */}
            <div className="w-full hidden lg:block">
              <InstantSearch
                searchClient={searchClient}
                indexName="Alias_Name_Index"
              >
                <SearchInput />
              </InstantSearch>
            </div>
          </div>
          {/* Right Side  */}
          <div className="flex   lg:flex-row flex-col items-start justify-between gap-6">
            <div>
              <h3 className="text-[#FF5C04] flex items-center font-medium gap-1">
                <BiSolidOffer size={30} /> Offers
              </h3>
            </div>
            <div className="relative">
              <div className="bg-[#FF5C04] -top-2 left-3 text-sm text-center absolute rounded-full w-6 h-6 flex items-center justify-center text-white">
                <span>{cartLength}</span>
              </div>
              <Link
                onClick={() => {
                  setOpen(!open);
                }}
                href={"/Cart"}
                className=" flex items-center font-medium gap-1"
              >
                <IoCartOutline size={30} /> Cart
              </Link>
            </div>
            <div>
              {!token ? (
                <Link
                  onClick={() => {
                    setOpen(!open);
                  }}
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
                    setOpen(!open);
                  }}
                  className=" flex items-center font-medium gap-1"
                >
                  <FaRegUser size={30} /> Log Out
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
