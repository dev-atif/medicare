import React from "react";
import { LuClipboardList } from "react-icons/lu";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";

interface IProp {
  bgmain: string;
  inerbg: string;
  title: string;
  textcolor: string;
  subtitle?: string;
  btncolor: String;
  paddingy:String;
  size:any;
}
const UploadPrescription = ({
  bgmain,
  inerbg,
  title,
  subtitle,
  textcolor,
  btncolor,
  paddingy,
  size,
}: IProp) => {
  return (
    <div className={`${bgmain} p-4 rounded-3xl`}>
      <div
        className={`${inerbg} ${textcolor}  gap-8 flex items-center  border-2 border-[#072400] border-dashed  rounded-xl px-5 justify-between ${paddingy}`}
      >
        <div className="w-1/2 flex flex-col gap-6">
          {" "}
          <h1 className="lg:text-2xl  font-bold">{title}</h1>
          <span className="text-sm">{subtitle}</span>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <span>
            <LuClipboardList className={`${size} `} />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-8">
        <div className={`${btncolor} w-fit p-1 rounded-full`}>
          <span className="text-white ">
            <HiMiniDocumentArrowUp size={30} />
          </span>
        </div>
        <div>
          <button className={` text-white py-2 px-8 rounded-full ${btncolor}`}>
            Order Via Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
