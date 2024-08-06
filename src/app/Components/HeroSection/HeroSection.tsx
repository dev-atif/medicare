import UploadPrescription from "@/app/Shared/UploadPrescription";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import hero from '../../../../public/hero.png'
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div >
      <div className="bg-[#9FE870] relative rounded-3xl mt-3 px-10 pb-28 -z-10 -mb-10">
        <h1 className="text-[#163300] font-bold text-[17rem] leading-tight">
          Pharmacy
        </h1>
        <div className="w-1/3 font-semibold text-[#163300] pl-5 text-lg leading-6">
          <p>
            ONLINE MEDICINE DELIVERY IS THE PROCESS OF ORDERING MEDICATIONS
            THROUGH A WEBSITE OR APP AND HAVING THEM DELIVERED TO YOUR DOORSTEP.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="w-1/4 ">
          
            <UploadPrescription bgmain={"bg-white"} inerbg={'bg-[#F1F5F9]'} title={"Uplaod Prescription"} textcolor={"text-[#072400]"} btncolor={"bg-[#072400]"} paddingy={'py-5'} size={100}/>
          </div>
        </div>
        <div className="flex  gap-4 w-1/3">
          <div className="flex items-center gap-3 text-xl font-bold text-[#163300]">
            <span>
              <TbTruckDelivery
                className="bg-[#163300] p-2 rounded-full text-white"
                size={60}
              />
            </span>
            <h3>Delivery to your doorstep</h3>
          </div>
          <div className="flex items-center gap-3 text-xl font-bold text-[#163300]">
            <span>
              <AiFillStar
                className="bg-[#163300] p-2 rounded-full text-white"
                size={60}
              />
            </span>
            <h3>100% Genuine Medicinesp</h3>
          </div>
        </div>
        {/* --------------------Hero Model */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
        <Image src={hero} alt="hero" width={700}/>
      </div>
      </div>
      
     
    </div>
  );
};

export default HeroSection;
