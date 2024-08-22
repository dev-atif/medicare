"use client";
import { GetSingleUser } from "@/Graphql/Queries";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { useAppSelector } from "./useRedux";

const useSingleUser = ({session}:any) => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["SingleUser"], // Changed to camelCase for consistency
    queryFn: async () => {
      const response = await request({
        url: "http://localhost:4000/",
        document: GetSingleUser,
        requestHeaders: {
          Authorization: session, // Use token directly without "Bearer"
        },
      });
      
      return response;
    },
  });

  return { data, error, isLoading };
};

export default useSingleUser;
