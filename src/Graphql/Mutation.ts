import gql from "graphql-tag";

export const ADD_TO_CART_MUTATION = gql`
  mutation AddToCart($cartItems: [CartItemsInput]) {
    addedToCart(cartItems: $cartItems) {
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
