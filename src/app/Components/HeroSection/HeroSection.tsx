"use client";
import UploadPrescription from "@/app/Shared/UploadPrescription";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import hero from "../../../../public/hero.png";
import React, { useEffect } from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#9FE870] relative rounded-3xl mt-3 lg:px-10 px-5 xl:pb-28 lg:pb-64 pb-8 -z-10 py-5 lg:-mb-10 -mb-5">
        <h1 className="text-[#163300] font-bold xl:text-[17rem] lg:text-[10rem] text-center text-7xl leading-tight">
          Pharmacy
        </h1>
        <div className="xl:w-1/3 lg:w-[43%] py-4 font-semibold text-[#163300] lg:pl-5 pl-2 lg:text-lg text-sm leading-6">
          <p>
            ONLINE MEDICINE DELIVERY IS THE PROCESS OF ORDERING MEDICATIONS
            THROUGH A WEBSITE OR APP AND HAVING THEM DELIVERED TO YOUR DOORSTEP.
          </p>
        </div>
        <div className="flex justify-end lg:-mt-24 xl:-mt-0">
          <div className="lg:w-[31%] xl:w-1/4 hidden lg:block">
            <UploadPrescription
              bgmain={"bg-white"}
              inerbg={"bg-[#F1F5F9]"}
              title={"Uplaod Prescription"}
              textcolor={"text-[#072400]"}
              btncolor={"bg-[#072400]"}
              paddingy={"py-5"}
              size={"lg:text-5xl xl:text-[6rem]"}
            />
          </div>
        </div>
        <div className="lg:flex   gap-4 lg:w-1/3 w-3/5 lg:-mt-36 xl:-mt-0">
          <div className="flex items-center my-4 lg:my-0 gap-3 lg:text-xl font-bold text-[#163300]">
            <span>
              <TbTruckDelivery className="bg-[#163300] p-2 lg:text-6xl text-4xl rounded-full text-white" />
            </span>
            <h3>Delivery to your doorstep</h3>
          </div>
          <div className="flex items-center  gap-3 lg:text-xl font-bold text-[#163300]">
            <span>
              <AiFillStar className="bg-[#163300] lg:text-6xl text-4xl p-2 rounded-full text-white" />
            </span>
            <h3>100% Genuine Medicinesp</h3>
          </div>
        </div>
        {/* --------------------Hero Model */}
        <div className="absolute lg:bottom-0 bottom-5 left-1/2 transform lg:-translate-x-1/2 ">
          <Image src={hero} alt="hero" width={700} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
