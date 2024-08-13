import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let fetchData = createAsyncThunk("fetchData", () => {
  return axios.get("https://fakestoreapi.com/products").then((response) => {
    return response.data;
  });
});

const productSlice = createSlice({
  name: "product",
  initialState: { product: [], pending: false, error:"" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log("=====fullfilled---->");
        state.product = action.payload;
        state.pending = false;
      })
      .addCase(fetchData.pending, (state) => {
        console.log("=====pending---->");
        state.pending = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.log("-----------  action----------->", action.error.message);
        state.error = action.error.message
        state.pending=false
        
      });
  },
});

export default productSlice.reducer;
