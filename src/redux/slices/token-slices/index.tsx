import { createSlice } from "@reduxjs/toolkit";

interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token:  "",
};
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log('token',action.payload)
      state.token = action.payload
      
      // sessionStorage.setItem("token", action.payload.token)
    },
    
    removeToken: (state) => {
      state.token = "";
      // sessionStorage.removeItem("token")
    },
  },
});

export const { removeToken, setToken } =
tokenSlice.actions;

export default tokenSlice.reducer;
