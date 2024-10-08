import ProductCard from "@/app/Shared/ProductCard";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import product from "../../../../public/product.png";
import Link from "next/link";
const ProductData = [
  {
    image: product,
    name: "Nutrition",
    rating: "(4.5)",
    title: "Dietary Supplement Health Products",
    saleprice: "80.00",
    Price: "64.00",
    label: "20%",
  },
  {
    image: product,
    name: "Healthcare",
    rating: "(4.5)",
    title: "Nitrile Disposable gloves 100",
    Price: "140.00",
  },
  {
    image: product,
    name: "Wellness",
    rating: "(4.5)",
    title: "Womens multi Vitamins A, Biotin- cranberry ",
    Price: "80.00",
  },
  {
    image: product,
    name: "Hygiene",
    rating: "(4.5)",
    title: "Antibacterial Liquid Hand Soap",
    Price: "80.00",
  },
];
const ProductDealList = () => {
  return (
    <div className="lg:px-20 px-3">
      <div className="flex  items-end justify-between">
        <h1 className="lg:text-4xl text-xl font-bold xl:w-1/4 w-1/2  text-[#242A60]">
          Todays best deals for you!
        </h1>
        <Link href={'/AllProduct'} className="uppercase lg:text-sm text-xs text-[#242A60] cursor-pointer group flex items-center gap-2">
          See All Products{" "}
          <span className="group-hover:translate-x-2 transition-all transform duration-300">
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
      {/* <div className="flex gap-8 mt-12">
        {ProductData.map((itm, idx) => (
          <div className=" " key={idx}>
            <ProductCard data={itm} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ProductDealList;
