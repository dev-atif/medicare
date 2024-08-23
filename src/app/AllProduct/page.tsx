"use client";
import React from "react";
import AllProduct from "../Components/AllProduct/AllProduct";
import AlgoliaProducts from "../Components/AllProduct/AlgoliaProducts";
import { usePathname, useRouter } from "next/navigation";

const Page = (props: any) => {
  const { searchParams } = props;
  const searchValue = searchParams.search || "";

  return (
    <div>
      {searchValue ? (
        <div className="pb-8">
          <AlgoliaProducts searchValue={searchValue} />
        </div> // Pass the search value if needed
      ) : (
        <AllProduct props={props} />
      )}
    </div>
  );
};

export default Page;
