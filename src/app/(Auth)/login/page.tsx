"use client";
import Image from "next/image";
import React, { useState } from "react";
import loginimg from "../../../../public/login.png";
import { FaUserCheck } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { register } from "module";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Login_Mutation } from "@/Graphql/Mutation";
import { useRouter } from "next/navigation";
import { RegisterState } from "@/types";
const page = () => {
  const [toggle, setToggle] = useState(false);
  const [login, setLogin] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const router = useRouter();
  const mutation = useMutation({
    mutationKey: ["Login "],
    mutationFn: async (input: any) => {
      const response = await axios.post("http://localhost:4000/", {
        query: Login_Mutation.loc?.source.body,
        variables: { input },
      });
      return response.data;
    },
    onSuccess: (data) => {
      const token = data.data.signIn; // Adjust based on your actual response structure
      if (token) {
        sessionStorage.setItem("auth_token", token);
      
        toast.success("Login Successful");
        router.back();
      } else {
        toast.error("No token received");
      }
    },
    onError: (errors: any) => {
      // Check if the error response contains the message field
      const errorMessage =
        errors.response?.data?.errors?.[0]?.message || "An error occurred";
      console.warn(errors);
      toast.error(errorMessage);
    },
  });

  ///handle Change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //handle Submit ////
  const LoginHandle = (e: any) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      toast.error("All fields are required");
      return;
    }

    mutation.mutate({
      email: login.email,
      password: login.password,
    });
  };
  return (
    <div className="flex items-start gap-4">
      <div className="w-1/2 relative full">
        <Image src={loginimg} alt="login" className="absolute h-screen" />
      </div>
      <div className="w-1/2 ">
        <div className="font-sans text-gray-900 antialiased">
          <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
              <div className="py-8">
                <center className="text-4xl flex items-center justify-center font-semibold  gap-3 text-[#FF5C04] ">
                  <span>
                    <FaUserCheck />
                  </span>
                  <span className=""> Log In</span>
                </center>
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-700" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={login.email}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9FE870]"
                />
              </div>

              <div className="mt-4">
                <label className="block font-medium text-sm text-gray-700" />
                <div className="relative">
                  <input
                    id="password"
                    type={toggle ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9FE870]"
                  />

                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {toggle ? (
                      <FaRegEye
                        className="cursor-pointer"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        className="cursor-pointer"
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <center>
                <button
                  onClick={LoginHandle}
                  className="bg-[#1D3800] w-1/2 uppercase my-3 tracking-widest text-white font-medium py-2 px-4 rounded-md shadow-sm"
                >
                  Login
                </button>
              </center>

              <div className="flex items-center justify-end mt-4">
                <Link
                  className="hover:underline tracking-widest text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  href="/signup"
                >
                  Don't Have Account ?{" "}
                  <span className=" font-semibold text-[#FF5C04]"> SignUp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
