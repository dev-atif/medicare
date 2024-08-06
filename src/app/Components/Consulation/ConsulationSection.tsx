import UploadPrescription from "@/app/Shared/UploadPrescription";
import React from "react";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import doc from "../../../../public/doc.png";
import Image from "next/image";

const ConsulationSection = () => {
  return (
    <div className="px-20 my-16 ">
      <div className="flex items-center space-x-8">
        <div className="w-1/2  ">
          <UploadPrescription
            bgmain={"bg-[#FFEB68]"}
            inerbg={"bg-white"}
            title={"Upload Prescription to place Order"}
            subtitle={"Upload only -jpg .png or .pdf files Size limit is 15 MB"}
            textcolor="#3F3922"
            btncolor={"bg-[#3A341C]"}
            paddingy={"py-12"}
            size={150}
          />
        </div>
        <div className=" w-1/2   rounded-3xl bg-[#FEC091] py-4 px-20 relative">
          <div className="flex  flex-col space-y-20">
            <div className={`  pt-16 `}>
              <div className="w-1/2 flex flex-col gap-6 mt-2">
                {" "}
                <h1 className="text-2xl  font-bold">
                  Don't have a Prescription?
                </h1>
                <span className="text-sm">
                  Upload only -jpg .png or .pdf files Size limit is 15 MB
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse  items-center justify-end gap-1 ">
              <div className={`bg-[#260B2F] w-fit p-1 rounded-full`}>
                <span className="text-white  ">
                  <HiMiniDocumentArrowUp size={30} />
                </span>
              </div>
              <div>
                <button
                  className={` text-white py-2 px-8 bg-[#260B2F] rounded-full `}
                >
                  Order Via Prescription
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-4">
            <Image src={doc} alt="doc" />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ConsulationSection;
