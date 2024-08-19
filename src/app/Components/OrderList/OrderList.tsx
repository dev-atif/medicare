"use client";
import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import request from "graphql-request";
import { GetallOrder } from "@/Graphql/Queries";
const OrderList = () => {
  const { isLoading, error, data } = useQuery<any>({
    queryKey: ["Order list"],
    queryFn: async () => {
      const response = await request("http://localhost:4000/", GetallOrder);
      return response;
    },
  });
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
  return (
    <div>
      {data?.GetallOrder.length > 0 ? (
        <>
          <div>
            {data?.GetallOrder.map((order: any, index: any) => (
              <div key={index} className="   my-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold my-2">Order {index + 1}</h2>
                  <h1 className="text-lg font-bold">
                    Total Amount :{" "}
                    <span className="text-[#FF5C04]">
                      $
                      {order.items.reduce((total: any, items: any) => {
                        return total + items.Sale_Price * items.quantity;
                      }, 0)}
                    </span>
                  </h1>
                </div>
                <table className="w-full min-w-full divide-y border  border-[#9FE870] divide-[#9FE870]">
                  <thead className="bg-[#9FE870] ">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider w-1/4">
                        Item Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider w-1/4">
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider w-1/4">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider w-1/4">
                        Sale Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#9FE870]">
                    {order.items.map((item: any, itemIndex: any) => (
                      <tr key={itemIndex}>
                        <td className="px-6 py-4 whitespace-nowrap w-1/4">
                          {item.Item_Name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-1/4">
                          {item.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-1/4">
                          {item.Item_Category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap w-1/4 ">
                          ${item.Sale_Price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default OrderList;
