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
