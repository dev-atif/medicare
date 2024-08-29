"use client";
import React, { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { MutationVariables, Product } from "@/types";
import UseCart from "@/Hooks/useCartfetch";
import { ImCross } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";
import cartImage from "../../../public/empty cart.png";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import useAmount from "@/Hooks/useAmount";
import { Query, useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
// import { ADD_TO_CART_MUTATION } from "@/Graphql/Mutation";
import { useRouter } from "next/navigation";
import withAuth from "../Components/withAuth";
import { useAppSelector } from "@/Hooks/useRedux";
import useSingleUser from "@/Hooks/useSingleuser";
import { ADD_To_Cart } from "@/Graphql/Mutation";


const page = () => {
 
  const { cart, increaseQuantity, decreaseQuantity, deleteProduct, clearCart } =
    UseCart();
  const { token } = useAppSelector((s) => s.token);

  const session = token;
  const router = useRouter();
  const { ProductAmount, overallTotal } = useAmount();
  const calculateTotalAmount = () => {
    return cart.reduce((total, item: any) => {
      return total + item.Sale_Price * item.quantity;
    }, 0);
  };

  const { data }: any = useSingleUser({ session });
  console.warn(data?.GetSingleUser.Firstname);
  const totalAmount = calculateTotalAmount();

  //Mutation Code -------------------
  const Mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      const { cartItems, userId, userName } = variables;
      const itemsMutation = cart.map((itm: Product) => {
        const item = {
          id: itm.id,
          Item_Name: itm.Item_Name,
          quantity: itm.quantity,
          Item_Category: itm.Item_Category,
          Sale_Price: itm.Sale_Price,
        };
        return item;
      });
      const response = await axios.post("http://localhost:4000/", {
        query: ADD_To_Cart.loc?.source.body,
        variables: { cartItems: itemsMutation, userId, userName },
      });
      return response.data;
    },
    onSuccess: async () => {
      toast.success("your Order has been placed");
      //Send Email code
    },
    onError: async () => {
      toast.error("Failed to place the order");
    },
  });

  //process Submit Function ----------------
  const handleProceed = (e: any) => {
    e.preventDefault();
    const Auth = token;
    if (!Auth) {
      toast.error("Please Login First to proceed");
      router.push("/login");
      return;
    }
    if (cart.length > 0) {
      Mutation.mutate({
        cartItems: cart,
        userId: data?.GetSingleUser.id,
        userName: data?.GetSingleUser.Firstname,
      });
    } else {
      toast.error("Cart is Empty");
    }
  };

  return (
    <div className="container mx-auto p-5">
      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center border-collapse border border-gray-200">
            <thead className="bg-[#9FE870] text-white">
              <tr>
                <th className="border   border-gray-200 p-2">Item Name</th>
                <th className="border border-gray-200 p-2">Company</th>
                <th className="border border-gray-200 p-2">Price</th>
                <th className="border border-gray-200 p-2">Total Price</th>
                <th className="border border-gray-200 p-2">Quantity</th>
                <th className="border border-gray-200 p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((itm: Product, idx) => (
                <tr key={idx} className="">
                  <td className="border border-gray-200 p-2">
                    {itm.Item_Name}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {itm.Company || "Unknown"}
                  </td>
                  <td className="border border-gray-200 p-2">
                    ${itm.Sale_Price}
                  </td>
                  <td className="border border-gray-200 p-2">
                    ${ProductAmount(itm)}
                  </td>
                  <td className="border border-gray-200 p-2">
                    <div className="flex items-center justify-evenly gap-2">
                      <button
                        onClick={() => increaseQuantity(itm.id)}
                        className="bg-[#9FE870] px-2 rounded text-white"
                      >
                        +
                      </button>
                      <span>{itm.quantity}</span>
                      <button
                        onClick={() => decreaseQuantity(itm.id)}
                        disabled={itm.quantity === 1}
                        className={`bg-[#9FE870] px-2 rounded text-white ${
                          itm.quantity === 1
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="border border-gray-200 p-2">
                    <button
                      onClick={() => deleteProduct(itm.id)}
                      className="bg-[#FF5C04] w-7 h-7 flex items-center justify-center rounded-full text-white"
                    >
                      <ImCross size={12} />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={6} className="text-center font-bold p-2">
                  Total Amount: ${totalAmount}
                </td>
               
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={clearCart}
              className="bg-[#FF5C04] flex items-center justify-center gap-2 py-2 px-4 text-white font-bold rounded-lg"
            >
              <FaRegTrashAlt size={20} />
              Clear Cart
            </button>
            <button
              onClick={handleProceed}
              className="bg-[#FF5C04] hover:bg-[#9FE870] transition-all duration-300 flex items-center justify-center gap-2 py-2 px-4 text-white font-bold rounded-lg"
            >
              Proceed
              <MdNavigateNext size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-3xl font-bold uppercase tracking-wider">
            Cart Is Empty{" "}
            <span className="text-[#FF5C04]">
              <Link href={"/AllProduct"}>Click Here to Add</Link>
            </span>
          </h1>
          <Image src={cartImage} alt="Empty Cart" width={500} />
        </div>
      )}
    </div>
  );
};

export default withAuth(page);
