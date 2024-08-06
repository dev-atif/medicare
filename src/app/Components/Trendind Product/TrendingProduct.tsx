import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import product from "../../../../public/product.png";
import ProductCard from "@/app/Shared/ProductCard";
const cat = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Gastroenterology",
  "Nephrology",
  "Gynecology",
  "Orthopedics",
  "Urology",
];
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
const TrendingProduct = () => {
  return (
    <div className="px-20 ">
      <div className="flex  items-end justify-between">
        <h1 className="text-4xl font-bold w-1/4 text-[#242A60]">
          Trending Products for you!
        </h1>
        <p className="uppercase text-sm text-[#242A60] cursor-pointer group flex items-center gap-2">
          See All Products{" "}
          <span className="group-hover:translate-x-2 transition-all transform duration-300">
            <FaArrowRightLong />
          </span>
        </p>
      </div>
      {/* --------Category------------------ */}
      <div className=" flex flex-wrap mt-10 ">
        {cat.map((itm, idx) => (
          <div key={idx}>
            <button className="bg-[#F1F5F9] rounded-full px-8 hover:bg-[#163300] hover:text-[#93D366] transform transition-all text-lg duration-300 text-[#26275C] font-semibold py-2  ">
              {itm}
            </button>
          </div>
        ))}
      </div>
      {/* ------------Product------------------------------- */}

      <div className="mt-10">
        <div className="flex  flex-wrap gap-6 justify-center">
          {ProductData.map((itm, idx) => (
            <div key={idx} className="w-[23%]">
              <ProductCard data={itm} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
