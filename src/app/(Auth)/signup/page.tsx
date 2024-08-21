"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaUserCheck } from "react-icons/fa";
import signup from "../../../../public/signup.jpg";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { REGISTER_MUTATION } from "@/Graphql/Mutation";
import toast from "react-hot-toast";
import { RegisterState } from "@/types";
import { useRouter } from "next/navigation";
import withAuth from "@/app/Components/WithAtuhentication";

const page = () => {
  const [toggle, setToggle] = useState(false);
  const [ctoggle, setCtoggle] = useState(false);
  const [register, setRegister] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const mutation = useMutation({
    mutationKey: ["register User "],
    mutationFn: async (input: RegisterState) => {
      const response = await axios.post("http://localhost:4000/", {
        query: REGISTER_MUTATION.loc?.source.body,
        variables: { input },
      });
      console.warn(response.data);
      return response.data;
    },
    onSuccess: async () => {
      toast.success("User Created SuccessFully");
      router.push("/login");
    },
    onError: (errors: any) => {
      // Check if the error response contains the message field
      const errorMessage =
        errors.response?.data?.errors?.[0]?.message || "An error occurred";
      console.warn(errors);
      toast.error(errorMessage);
    },
  });
  ///handle Change to get value and store
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };
  ///handle SUbmit to send value to backend
  const handleRegister = (e: any) => {
    e.preventDefault();
    if (
      !register.FirstName ||
      !register.LastName ||
      !register.confirmPassword ||
      !register.email ||
      !register.password
    ) {
      toast.error("All Fields Are required ");
      return;
    }
    mutation.mutate({
      Firstname: register.FirstName,
      Lastname: register.LastName,
      email: register.email,
      password: register.password,
      confirmpassword: register.confirmPassword,
    });
  };
  return (
    <div>
      <div className="flex items-start gap-4">
        <div className="w-1/2 relative full">
          <Image src={signup} alt="login" className="absolute h-screen" />
        </div>
        <div className="w-1/2  bg-[#f8f4f3] h-screen flex items-center justify-between ">
          <div className="max-w-lg mx-auto  rounded-xl bg-white shadow-lg px-8 py-10 flex flex-col w-full items-center">
            <h1 className="text-xl uppercase tracking-widest font-bold text-center text-black mb-8">
              Welcome to{" "}
              <span className="text-[#FF5C04] font-bold text-2xl">
                Medicare
              </span>
            </h1>
            <div className="w-full flex flex-col gap-4">
              <div className="flex items-start flex-col justify-start">
                <input
                  type="text"
                  id="firstName"
                  name="FirstName"
                  placeholder="First Name"
                  value={register.FirstName}
                  onChange={handleChange}
                  className="w-full px-3  bg-white py-2 rounded-md border  outline-[#9FE870]"
                />
              </div>

              <div className="flex items-start flex-col justify-start">
                <input
                  type="text"
                  id="lastName"
                  name="LastName"
                  value={register.LastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-3  bg-white py-2 rounded-md border border-gray-300   outline-[#9FE870]"
                />
              </div>

              <div className="flex items-start flex-col justify-start">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={register.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3  bg-white py-2 rounded-md border  outline-[#9FE870]"
                />
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={toggle ? "text" : "password"}
                  name="password"
                  value={register.password}
                  onChange={handleChange}
                  placeholder="Password"
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

              <div className="relative">
                <input
                  id="ConfirmPassword"
                  type={toggle ? "text" : "password"}
                  name="confirmPassword"
                  value={register.confirmPassword}
                  onChange={handleChange}
                  placeholder="ConfirmPassword"
                  required
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#9FE870]"
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  {ctoggle ? (
                    <FaRegEye
                      className="cursor-pointer"
                      onClick={() => {
                        setCtoggle(!ctoggle);
                      }}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="cursor-pointer"
                      onClick={() => {
                        setCtoggle(!ctoggle);
                      }}
                    />
                  )}
                </div>
              </div>

              <button
                onClick={handleRegister}
                className="bg-[#1D3800] uppercase tracking-widest text-white font-medium py-2 px-4 rounded-md shadow-sm"
              >
                Register
              </button>
            </div>

            <div className="mt-4 text-center">
              <span className="text-sm text-black">
                Already have an account?{" "}
              </span>
              <Link href="/login" className="text-[#FF5C04]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(page);
