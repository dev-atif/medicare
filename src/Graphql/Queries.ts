import gql from "graphql-tag";

export const GET_ALL_COMPANIES = gql`
  query {
    GetallCompany(limit: 6) {
      Company
    }
  }
`;
export const Get_All_Product = gql`
  query GetAllProducts($limit: Int, $start: Int, $Company: String) {
    GetallData(limit: $limit, start: $start, Company: $Company) {
      GetallData {
        id
        Serial_No
        Alias_Name
        Item_Name
        Unit_Price
        Stock_Qty
        Item_Category
        Item_Class
        Purchase_Price
        Sale_Price
        Pack_Unit
        Stock_Value
        Company
      }
      totalCount
    }
  }
`;
export const GetallOrder = gql`
  query GetallProduct {
    GetallOrder {
    id
    createdAt
    userName
    items {
      id
      Item_Name
      quantity
      Item_Category
      Sale_Price
    }
  }
  }
`;
export const GetSingleUser = gql`
query getSingleUser {
  GetSingleUser {
    id
    Firstname
    Lastname
    email
    role
  }
}

`
