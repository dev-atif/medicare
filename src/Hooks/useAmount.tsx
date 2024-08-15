"use client";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";

const useAmount = () => {
  const [cart, setCart] = useState([]);
  const [overallTotal, setOverallTotal] = useState<number>(0);
  useEffect(() => {
    // Retrieve cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem("Cart") || "[]");
    setCart(cartData);
    // Generate columns automatically if data exists
  }, []);


  const ProductAmount = (item: Product) => item.Sale_Price * item.quantity;

  return { ProductAmount, overallTotal };
};

export default useAmount;
