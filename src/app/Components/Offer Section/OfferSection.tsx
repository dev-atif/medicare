import OffCard from "@/app/Shared/OffCard";
import React from "react";
import actor1 from '../../../../public/actor1.png'
import actor12 from '../../../../public/actor2.png'
import actor3 from '../../../../public/actor3.png'
const OfferSection = () => {
  return (
    <div className="lg:flex xl:px-20 gap-3 mt-20 hidden ">
      <div className="w-1/3">
        <OffCard title={'Maternal Health and Comfort'} cashback={'5%'} bg="bg-[#FEC091]" image={actor1}/>
      </div>
      <div className="w-1/3">
        <OffCard image={actor12} title={'Headache and Migraine Solutions'} Off={'10%'} bg="bg-[#A0E1E1]"/>
      </div>
      <div className="w-1/3">
      <OffCard image={actor3} title={'Cold and Flu Relief'} Off={'10%'} bg="bg-[#FFEB68]"/>
      </div>
    </div>
  );
};

export default OfferSection;
