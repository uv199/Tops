import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  (no = 1) => {
    return axios.get("https://fakestoreapi.com/products/" + no).then((res) => {
      console.log("-----------  res.data----------->", res.data);
      return res.data;
    });
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { product: [], error: "", pending: false },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.pending = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.pending = false;
    });
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.pending = true;
    });
  },
});

export default productSlice.reducer;
