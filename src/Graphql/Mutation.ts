import gql from "graphql-tag";

// export const ADD_TO_CART_MUTATION = gql`
//   mutation AddToCart($cartItems: [CartItemsInput]) {
//     addedToCart(cartItems: $cartItems) {
//       items {
//         id
//         Item_Name
//         quantity
//         Item_Category
//         Sale_Price
//       }
//     }
//   }
// `;


export const ADD_To_Cart=gql`
mutation AddToCart($userId: String!, $userName: String, $cartItems: [CartItemsInput]) {
  addedToCart(userId: $userId, userName: $userName, cartItems: $cartItems) {
    id
    items {
      id
      Item_Name
      quantity
      Item_Category
      Sale_Price
    }
    createdAt
    userName
  }
}
`


export const REGISTER_MUTATION = gql`
  mutation Register($input: UserInput!) {
    register(input: $input)
  }
`;

export const Login_Mutation = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input)
  }
`;
