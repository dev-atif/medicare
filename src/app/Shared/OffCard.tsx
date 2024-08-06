import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
interface IProp{
    title:String
    cashback?:String
    Off?:String
    image:StaticImageData
    bg:string;
}
const OffCard = ({title,cashback,Off,bg,image}:IProp) => {
  return (
    <div>
      <div className= {`p-8 flex flex-col justify-between h-80 rounded-3xl relative ${bg}`}>
        <div className="text-[#0F0124]">
          <h1 className="text-2xl font-bold w-2/3">{title}</h1>
          <p className="uppercase group flex mt-2 items-center gap-2 text-lg font-medium">
            Browse All{" "}
            <span className="group-hover:translate-x-2 transition-all transform duration-300">
              <FaArrowRightLong />
            </span>
          </p>
        </div>
        <div>
            {cashback ?<div className="text-[#0F0124]">
            <p className="text-3xl font-bold ">5%</p>
            <p className="text-lg font-medium -mt-2"> Cashback</p>
          </div>:<div>
            <div className=" p-2 rounded">
              <p className="text-sm font-semibold">Flat</p>
              <p className="text-4xl font-bold flex gap-3">
                10% <span className="text-lg font-bold">OFF</span>
              </p>
            </div>
          </div> }
         
          
        </div>
        <div className="absolute right-2 bottom-0">
           <Image src={image} alt="actor" width={200}/>
        </div>
      </div>
    </div>
  );
};

export default OffCard;
