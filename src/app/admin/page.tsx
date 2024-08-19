import React from "react";
import OrderList from "../Components/OrderList/OrderList";

const page = () => {
  return (
    <div>
      <div className=" my-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl  uppercase ProductHeading   tracking-widest  text-[#242A60] font-bold">
            Order List
          </h1>
        </div>
        <div>
            <OrderList/>
        </div>
      </div>
    </div>
  );
};

export default page;
