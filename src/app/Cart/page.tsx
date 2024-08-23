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
    <div>
      <div></div>
      {cart.length > 0 ? (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="border-2 font-bold my-4 flex items-center  bg-[#9FE870] border-[#9FE870] even:my-2 p-4 rounded-2xl">
              <div className="w-1/3">
                <h1>Item Name</h1>
              </div>
              <div className="w-1/3">
                <h1>Company</h1>
              </div>
              <div className="w-1/3 ">
                <h1>Price</h1>
              </div>
              <div className="w-1/3 ">
                <h1>Total Price</h1>
              </div>
              <div className="flex items-center gap-16">
                <div>
                  <h1>Quantity</h1>
                </div>
                <div>
                  <h1>Delete</h1>
                </div>
              </div>
            </div>
            <div>
              {cart.map((itm: Product, idx) => (
                <div className="flex-1 border-2 flex items-center  border-[#9FE870] even:my-2 p-4 rounded-2xl">
                  <div className="w-1/3">
                    <h1>{itm.Item_Name}</h1>
                  </div>
                  <div className="w-1/3 ps-2">
                    {itm.Company ? <h1>{itm.Company}</h1> : <h1>Unknown</h1>}
                  </div>
                  <div className="w-1/3 ps-8">
                    <h1>{itm.Sale_Price}</h1>
                  </div>
                  <div className="w-1/3 ps-8">
                    <h1>{ProductAmount(itm)}</h1>
                  </div>
                  <div>
                    <div className="flex items-center gap-16">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => {
                            increaseQuantity(itm.id);
                          }}
                          className="bg-[#9FE870] px-3 rounded-lg  font-bold text-xl text-white "
                        >
                          +
                        </button>
                        {itm.quantity}
                        <button
                          onClick={() => {
                            decreaseQuantity(itm.id);
                          }}
                          disabled={itm.quantity === 1}
                          className={`bg-[#9FE870] px-3 rounded-lg  font-bold text-xl text-white ${
                            itm.quantity === 1
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                        >
                          -
                        </button>
                      </div>
                      <div
                        onClick={() => {
                          deleteProduct(itm.id);
                        }}
                        className="bg-[#FF5C04] w-7 h-7 flex items-center justify-center rounded-full hover:scale-105 transition-all transform cursor-pointer text-white"
                      >
                        <ImCross className="p-2" size={30} />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              ))}
              <div className="flex-1 border-2 flex items-center  justify-center border-[#9FE870] even:my-2 p-4 rounded-2xl">
                <h1 className="font-bold text-xl">
                  Total Amount : ${totalAmount}
                </h1>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <button
                  onClick={() => {
                    clearCart();
                  }}
                  className="bg-[#FF5C04] flex items-center justify-center gap-4 w-1/4 py-2 text-white font-bold rounded-xl"
                >
                  <span>
                    <FaRegTrashAlt size={20} />
                  </span>
                  Clear Cart
                </button>
                <button
                  onClick={handleProceed}
                  className="bg-[#FF5C04] hover:bg-[#9FE870] transition-all transform duration-300 flex items-center justify-center gap-4 w-1/4 py-2 text-white font-bold rounded-xl"
                >
                  Proceed
                  <span>
                    <MdNavigateNext size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex mt-10 flex-col items-center justify-center">
            <div>
              <h1 className="text-3xl font-bold tracking-wider uppercase">
                Cart Is Empty{" "}
                <span className="text-[#FF5C04]">
                  <Link href={"/AllProduct"}> Click Here to Add</Link>
                </span>
              </h1>
              <div>
                <Image src={cartImage} alt="emptycart" width={500} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withAuth(page);
