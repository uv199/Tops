import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchProduct", () => {
  return axios({
    method: "get",
    url: "https://fakestoreapi.com/produc",
  }).then((res) => {
    return res.data;
  });
});
const productSlice = createSlice({
  name: "product",
  initialState: { product: [], pending: false, error: "" },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.product = action.payload;
        state.pending = false;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default productSlice.reducer;
