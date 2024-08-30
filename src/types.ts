import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  Serial_No: string;
  Alias_Name: string;
  Item_Name: string;
  Unit_Price: number;
  Stock_Qty: number;
  Item_Category: string;
  Item_Class: string;
  Purchase_Price: number;
  Sale_Price: number;
  Pack_Unit: string;
  Stock_Value: number;
  image?: StaticImageData;
  saleprice?: string;
  label?: string;
  Company: string;
  quantity: number;
}

export interface GetAllDataResponse {
  GetallData: {
    GetallData: Product[]; // The actual array of Product objects
    totalCount: number; // Total number of products
  };
}

export interface GetAllDataVariables {
  limit: number;
  start: number;
  Company: string;
}
export interface RegisterState {
  Firstname: string;
  Lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "USER" | "ADMIN"; // Assuming role can be either "USER" or "ADMIN"
}

export interface UserData {
  GetSingleUser: {
    id: string;
    Firstname: string;
    Lastname: string;
    email: string;
    role: string;
  };
}

 export interface MutationVariables {
  cartItems: Product[];
  userId: string;
  userName: string;
}
export interface EmailParams {
  to_name: string;
  to_email: string;
  order_details: {
    Item_Name: string;
    quantity: number;
    Sale_Price: number;
  }[];
  total_amount: number;
}