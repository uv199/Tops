import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("fetchProduct", (id) => {
  return axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
    console.log("-----------  res----------->", res);
    return res.data;
  });
});

const productSlice = createSlice({
  name: "product",
  initialState: { product: [], pending: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        console.log("pending-----");
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("fulfilled-----");
        state.product = action.payload;
        state.pending = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log("Rejected-----");
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default productSlice.reducer;
