import UploadPrescription from "@/app/Shared/UploadPrescription";
import React from "react";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import doc from "../../../../public/doc.png";
import Image from "next/image";

const ConsulationSection = () => {
  return (
    <div className="xl:px-20 my-16 ">
      <div className="lg:flex items-center lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="lg:w-1/2 w-full ">
          <UploadPrescription
            bgmain={"bg-[#FFEB68]"}
            inerbg={"bg-white"}
            title={"Upload Prescription to place Order"}
            subtitle={"Upload only -jpg .png or .pdf files Size limit is 15 MB"}
            textcolor="#3F3922"
            btncolor={"bg-[#3A341C]"}
            paddingy={"py-12"}
            size={'text-[8rem]'}
          />
        </div>
        <div className=" lg:w-1/2  w-full  rounded-3xl bg-[#FEC091] py-2 lg:px-20 px-5 relative z-10">
          <div className="flex  flex-col lg:space-y-20">
            <div className={`  lg:pt-16 py-16 lg:py-0 `}>
              <div className="lg:w-1/2 flex flex-col gap-6 mt-2">
                {" "}
                <h1 className="lg:text-2xl text-xl  font-bold">
                  Don't have a Prescription?
                </h1>
                <span className="text-sm w-1/2 lg:w-full" >
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
                  className={` text-white w-full py-2 px-8 bg-[#260B2F] rounded-full `}
                >
                  Order Via Prescription
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 lg:right-4  left-1/3 xl:left-1/2 -z-10 xl:z-0">
            <Image src={doc} alt="doc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsulationSection;
