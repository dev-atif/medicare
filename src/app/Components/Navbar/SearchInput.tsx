"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { connectSearchBox } from "react-instantsearch-dom";
import { RxCross1 } from "react-icons/rx";
const SearchInput = ({ currentRefinement, refine }: any) => {
  const route = useRouter();
  const handleChange = (event: any) => {
    const value = event.target.value;

    if (value) {
      // If there's a value, redirect to the AllProduct page
      route.push(`/AllProduct?search=${value}`);
    } else {
      route.push("/AllProduct");
    }
  };
  return (
    <div className="">
      <div className="flex items-center gap-3 bg-[#FFFFFF] ps-1 rounded-full py-1 ">
        <span className="bg-[#9FE870] rounded-full p-2 text-2xl">
          <BiSearch />
        </span>
        <input
          value={currentRefinement}
          onChange={handleChange}
          type="text"
          placeholder="Medicine and Healthcare Items "
          className="bg-transparent focus:outline-none w-full pe-5"
        />
      </div>
    </div>
  );
};

export default SearchInput;
