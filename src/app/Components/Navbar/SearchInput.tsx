import React from "react";
import { BiSearch } from "react-icons/bi";
const SearchInput = () => {
  return (
    <div className="">
      <div className="flex items-center gap-3 bg-[#FFFFFF] ps-1 rounded-full py-1 ">
        <span className="bg-[#9FE870] rounded-full p-2 text-2xl">
          <BiSearch  />
        </span>
        <input
          type="text"
          placeholder="Medicine and Healthcare Items "
          className="bg-transparent focus:outline-none w-full pe-5"
        />
      </div>
    </div>
  );
};

export default SearchInput;
