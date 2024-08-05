import React from "react";
import { LuClipboardList } from "react-icons/lu";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
const UploadPrescription = () => {
  return (
    <div className="bg-white p-4 rounded-xl" >
      <div className="text-[#072400] bg-[#F1F5F9] gap-8 flex items-center border border-[#072400] border-dashed rounded-xl px-5 justify-center py-5">
       <div className="w-1/2"> <h1 className="text-2xl font-bold">Upload Prescription</h1></div>
        <div className="w-1/3">
        <span>
          <LuClipboardList size={100} />
        </span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-4">
       <div className="bg-[#072400] w-fit p-1 rounded-full">
       <span className="text-white " ><HiMiniDocumentArrowUp size={30}/></span>
        </div>
        <div>
            <button className="bg-[#072400] text-white py-2 px-8 rounded-full">
                Order Via Prescription
            </button>
            </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
