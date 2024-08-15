"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PriceSlider = () => {
  const searchParams = useSearchParams();
  const a = usePathname();
  console.log(a);
  const priceSlider = parseInt(searchParams.get("price") || "0", 10);

  const [price, setPrice] = useState(priceSlider);
  const router = useRouter();

  const updatePrice = (value: string) => {
    const priceRange = parseInt(value);
    setPrice(priceRange);

    // Get the current search parameters
    const currentParams = new URLSearchParams(searchParams);
    // Update the price parameter
    if (priceRange === 0) {
      currentParams.delete("price");
    } else {
      currentParams.set("price", value);
    }
   // Push the updated parameters to the router
    router.push(`?${currentParams.toString()}`);
  };
  return (
    <div>
      <div>
        <div className="mb-4">
          <label
            htmlFor="price-range"
            className="block text-[#20245C] font-bold mb-2"
          >
            Price Range
          </label>
          <input
            type="range"
            id="price-range"
            className="w-full accent-indigo-600"
            min="0"
            max="9000"
            value={price}
            onChange={(e) => updatePrice(e.target.value)}
          />
        </div>
        <div className="flex justify-between text-[#20245C]">
          <span>${price}</span>
          <span>$9000</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
