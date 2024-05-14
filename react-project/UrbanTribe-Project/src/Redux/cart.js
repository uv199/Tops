import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../ui/api/axiosConfig";

export const fetchCartData = createAsyncThunk("fetchCart", (token) => {
  return API.get("/cart/getAll", {
    headers: {
      authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("-=-=err---", err);
    });
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    cartId: "",
    isRefresh: true,
  },
  reducers: {
    refetch: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, { payload }) => {
      state.cartId = payload.cartId;
      state.cartData = payload.data;
    });
  },
});

export default cartSlice.reducer;
export const { refetch } = cartSlice.actions;

let n = 7;
let arr = [1, 2, 1, 2, 1, 3, 2];
//  [[1,1,1],[2,2],[3]] 

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
}
