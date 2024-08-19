'use client'
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import product from "../../../../public/product.png";
import ProductCard from "@/app/Shared/ProductCard";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { GET_ALL_COMPANIES } from "@/Graphql/Queries";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const ProductData = [
  {
    image: product,
    name: "Vitamin",
    rating: "(4.5)",
    title: "Gencell Collagen peptides + biotin & vitamin C",
    saleprice: "80.00",
    Price: "64.00",
    label: "20%",
  },
  {
    image: product,
    name: "Healthcare",
    rating: "(4.5)",
    title: "Nature's Bounty D3 10000",
    Price: "140.00",
  },
  {
    image: product,
    name: "Wellness",
    rating: "(4.5)",
    title: "Vitamin D 1000 IU High Potency",
    saleprice: "80.00",
    Price: "64.00",
    label: "20%",
  },
  {
    image: product,
    name: "Vitamin",
    rating: "(4.5)",
    title: "Physician's Daily Multivitamin + D3",
    Price: "80.00",
  },
  {
    image: product,
    name: "Accessories",
    rating: "(4.5)",
    title: "Savion Liquid Antiseptic Ilitre",
    saleprice: "18.00",
    Price: "15.00",
    label: "20%",
  },
  {
    image: product,
    name: "Powder",
    rating: "(4.5)",
    title: "Protinex Vanilla Delight, Nutritional Drink Mix",
    Price: "140.00",
  },
  {
    image: product,
    name: "Wellness",
    rating: "(4.5)",
    title: "Zerocal Sachet 25",
    saleprice: "80.00",
    Price: "64.00",
    label: "20%",
  },
  {
    image: product,
    name: "Diaper",
    rating: "(4.5)",
    title: "Twinkle Baby Diaper Extra Large 32pcs",
    Price: "80.00",
  },
];
interface item {
  Company: String;
}
interface AllCompany {
  GetallCompany: {
    companyies: item[];
  };
}
const TrendingProduct = ({props}:any) => {
const router = useRouter()
  const {searchParams} = props
  const params =new URLSearchParams(searchParams.toString())
  const { data }: any = useQuery({
    queryKey: ["companyies"],
    queryFn: async () => {
      const response:AllCompany = await request(
        "http://localhost:4000",
        GET_ALL_COMPANIES
      );
      return response.GetallCompany
    },
    
    staleTime: 5 * 1000,
  });
  console.log("fetch data", data);
  return (
    <div className="px-20 ">
      <div className="flex  items-end justify-between">
        <h1 className="text-4xl font-bold w-1/4 text-[#242A60]">
          Trending Products for you!
        </h1>
        <p className="uppercase text-sm text-[#242A60] cursor-pointer group flex items-center gap-2">
          <Link href={'/AllProduct'}>See All Products{" "}</Link>
          <span className="group-hover:translate-x-2 transition-all transform duration-300">
            <FaArrowRightLong />
          </span>
        </p>
      </div>
      {/* --------Category------------------ */}
      <div className=" flex flex-wrap mt-10 ">
        {data?.map((itm:any, idx:any) => (
          <div key={idx}>
            <button onClick={()=>{
            
              params.set('cat',itm.Company)
              router.push(`/AllProduct?${params.toString()}`);
            }}   className="bg-[#F1F5F9] rounded-full px-8 hover:bg-[#163300] hover:text-[#93D366] transform transition-all text-base duration-300 text-[#26275C] font-semibold py-2  ">
              {itm.Company}
            </button>
          </div>
        ))}
      </div>
      {/* ------------Product------------------------------- */}

      <div className="mt-10">
        <div className="flex  flex-wrap gap-6 justify-center">
          {/* {ProductData.map((itm, idx) => (
            <div key={idx} className="w-[23%]">
              <ProductCard data={itm} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
