"use client";

import PriceSlider from "@/app/Shared/PriceSlider";
import ProductCard from "@/app/Shared/ProductCard";
import { Get_All_Product } from "@/Graphql/Queries";
import { GetAllDataResponse, GetAllDataVariables, Product } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllProduct = ({props}:any) => {
 
  const {searchParams} =props
 
  const router = useRouter();
  const limit = 8;
  const params = new URLSearchParams(window.location.search);
  const initialPage = Math.max(parseInt(searchParams.page || "1"), 1);
  const Cat = searchParams.cat
  const order = searchParams.order;
  const priceRange = parseInt(searchParams.price || "0");
  const [filterdata, setFIlterData] = useState<Product[]>([]);

  const [page, setPage] = useState(initialPage);
  const skip = (page - 1) * limit;
  const fetchAllProducts = async (variables: GetAllDataVariables) => {
    const response = await request<GetAllDataResponse>(
      "http://localhost:4000/",
      Get_All_Product,
      variables
    );
    return response;
  };
  // Use Query to get data
  const { isLoading, error, data } = useQuery<GetAllDataResponse, Error>({
    queryKey: ["All Products", limit, skip, Cat || ""], // Pass variables directly in queryKey if needed
    queryFn: () =>
      fetchAllProducts({ limit: limit, start: skip, Company: Cat || "" }),
    placeholderData: keepPreviousData,
  });
  // Pagination for if someOne use link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = Math.max(parseInt(params.get("page") || "1"), 1);
 
    if (data) {
      setFIlterData(data?.GetallData?.GetallData);
    }
    setPage(pageParam);
  }, [router, data]);

  // useEffect(() => {
  //   const SortingData = () => {
  //     console.warn("order", order);

  //     const sortedData: any = data?.GetallData?.GetallData.slice().sort(
  //       (a, b): any => {
  //         if (order === "ASC") {
  //           // Sorting ascending
  //           return a.Item_Name.localeCompare(b.Item_Name, "en", {
  //             sensitivity: "base",
  //           });
  //         } else if (order === "DSC") {
  //           // Sorting descending
  //           return b.Item_Name.localeCompare(a.Item_Name, "en", {
  //             sensitivity: "base",
  //           });
  //         }
  //       }
  //     );

  //     setFIlterData(sortedData); // Update the state with sorted data
  //   };

  //   SortingData();
  // }, [order, data?.GetallData?.GetallData]);


  useEffect(() => {
    let filterSortData = data?.GetallData?.GetallData || [];
    if (priceRange && priceRange > 0) {
      filterSortData = filterSortData.filter(
        (itm) => itm.Sale_Price <= priceRange
      );
    }
    if (order) {
      filterSortData = filterSortData.slice().sort((a: any, b: any) => {
        if (order === "ASC") {
          // Sorting ascending
          return a.Item_Name.localeCompare(b.Item_Name, "en", {
            sensitivity: "base",
          });
        } else if (order === "DSC") {
          // Sorting descending
          return b.Item_Name.localeCompare(a.Item_Name, "en", {
            sensitivity: "base",
          });
        }
      });
    }
    setFIlterData(filterSortData)
  },[order,priceRange,data]);

  const ButtonHandler = (newPage: number) => {
    if (newPage < 1) {
      newPage = 1;
    }
    setPage(newPage);
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    if (Cat) {
      params.set("cat", Cat);
    }
    router.push(`?${params.toString()}`);
  };
  // Assending and decending Order Function
  const selectFunction = (e: any) => {
    const value = e.target.value;
    if (value === "None") {
      params.delete("order");
    } else {
      params.set("order", value);
    }
    router.push(`?${params.toString()}`);
  };

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className=" flex justify-center items-center  ">
            <h1 className="loader  "></h1>
          </div>
        </div>
      </>
    );
  }
  const { GetallData: nestedData = { GetallData: [], totalCount: 0 } } =
    data || {};
  const { GetallData = [], totalCount = 0 } = nestedData;

  const totalPages = Math.ceil(totalCount / limit);
  console.warn("loaded data", totalPages);

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div>
      <div className="px-12">
        <div className="mt-12 flex items-center justify-center">
          <div></div>
          <h1 className="text-4xl uppercase ProductHeading   tracking-widest  text-[#242A60] font-bold">
            ALl Products ....
          </h1>
        </div>
        {/* Filtered Section    -----------------------------------------------------------------------     */}
        <div className="mt-8 max-w-6xl mx-auto">
          <div className="flex gap-11 items-center justify-center">
            <div className="w-1/2">
              <select
                onChange={selectFunction}
                value={order ||''}
                className=" bg-transparent border-2 border-[#9FE870] text-gray-900 text-sm rounded-lg focus:ring-0 w-full px-3 py-3 focus-within:outline-none"
              >
                <option selected>Select Order</option>
                <option value="None">None </option>
                <option value="ASC">Accending Order </option>
                <option value="DSC">Decending Order</option>
              </select>
            </div>
            <div className="w-1/2">
              <PriceSlider />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------- */}
        <div className="flex gap-8 flex-wrap justify-center  mt-20">
          {filterdata?.map((itm, idx) => (
            <div key={idx} className="w-[20%]">
              <ProductCard data={itm} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex justify-between my-6 w-1/4 ">
            <button
              onClick={() => ButtonHandler(page - 1)}
              className={`${
                skip === 0
                  ? "disabled bg-[#f2864c] cursor-not-allowed"
                  : "group"
              } bg-[#FF5C04] w-fit p-4 transition-all transform duration-300  flex  items-center justify-center rounded-full text-white`}
            >
              <span className="group-hover:-translate-x-2 transition-all transform duration-300">
                <FaArrowLeft size={30} />
              </span>
            </button>
            <button
              onClick={() => ButtonHandler(page + 1)}
              disabled={page >= totalPages}
              className={`${
                page >= totalPages
                  ? "disabled bg-[#f2864c] cursor-not-allowed"
                  : "group"
              } bg-[#FF5C04] w-fit p-4 transition-all transform duration-300 flex items-center justify-center rounded-full text-white`}
            >
              <span className="group-hover:translate-x-2 transition-all transform duration-300">
                <FaArrowRight size={30} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default AllProduct;
