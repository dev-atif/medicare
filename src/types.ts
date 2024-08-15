import { Int } from "graphql-request/alpha/schema/scalars";
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
    image?:StaticImageData;
    saleprice?:string;
    label?:string
    Company:string
    quantity:number
    
  }
  
  export interface GetAllDataResponse {
    GetallData: {
        GetallData: Product[]; // The actual array of Product objects
        totalCount: number;    // Total number of products
    };
}
  
  export interface GetAllDataVariables {
    limit: number;
    start: number;
    Company:string
  }