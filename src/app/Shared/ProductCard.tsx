'use client'
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import product from "../../../public/product.png";
import { FaPlus } from "react-icons/fa6";
import { Product } from "@/types";
import toast from "react-hot-toast";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const addToCart = (item: Product) => {
    if (item.Alias_Name) {
      // Retrieve the cart from local storage or initialize an empty array if none exists
      const existingCart = JSON.parse(localStorage.getItem('Cart') || '[]');
      
      // Check if the item already exists in the cart
      let foundItem = existingCart.find((cartItem:Product) => cartItem.id === item.id);
      
      if (foundItem) {
        // If found, increase the quantity
        foundItem.quantity += 1;
      } else {
        // If not found, add the item with a quantity of 1
        const newItem = { ...item, quantity: 1 };
        existingCart.push(newItem);
      }
      
      // Save the updated cart back to local storage
      localStorage.setItem('Cart', JSON.stringify(existingCart));
      toast.success(`Product added to cart.`);
    }
  }
  return (
    <div>
      <div className="w-full relative">
        <div className="bg-[#F1F5F9]   -z-10 h-72  flex  items-center justify-center rounded-3xl">
          {data.image ? (
            <Image src={data.image} alt="product" />
          ) : (
            <Image src={product} alt="product" />
          )}
        </div>
        <div className="bg-white p-3 rounded-3xl z-20 -mt-8 border border-[#F1F5F9]">
          <div className="flex items-center justify-between text-[#AAB2C0]">
            <h4>{data.Item_Category}</h4>
            <p className="flex items-center gap-1">
              {" "}
              <span className="text-[#FC8541] ">
                <FaStar />
              </span>
              {/* {data.rating} */}
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-[#20245C]  line-clamp-2 h-16 font-bold text-lg pe-4">
              {data.Item_Name}
            </h1>
            <h1 className="text-sm text-[#AAB2C0]">Company <span>({ data.Company?data.Company:'unknown'})</span></h1>
           
          </div>
          
          <div className="flex items-center justify-between">
            <div className="w-[45%]">
              <button onClick={()=>{addToCart(data)}} className="flex  text-sm items-center gap-0.5 text-[#20245C] border-2 font-bold border-[#20245C] w-full py-2 justify-center rounded-3xl">
                <span>
                  <FaPlus size={12} />
                </span>{" "}
                Add to Cart
              </button>
            </div>
            <div>
              <p className="flex items-center text-[#20245C] gap-1 font-semibold">
                {/* <span className="text-[#AAB2C0] text-sm line-through">$80.00</span> */}
                {data.saleprice ? (
                  <span className="text-[#AAB2C0] text-sm line-through">
                    ${data.saleprice}
                  </span>
                ) : null}
                ${data.Sale_Price}
              </p>
            </div>
          </div>
        </div>
        {/* -----------Label------------------ */}
        {data.label ? (
          <div className="bg-[#F0DA69] w-fit px-5 py-2 rounded-s-xl absolute top-5 right-0">
            <h1 className="text-[#20245C] font-bold">{data.label} Off</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
