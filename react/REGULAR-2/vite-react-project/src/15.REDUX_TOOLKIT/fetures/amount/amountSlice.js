import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { increment as incrementCount } from "../count/countSlice";
import axios from "axios";
const initialState = {
  amount: 2000,
};

createAsyncThunk("count/fetchData", () => {
  axios.get();
});

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount++;
    },
  },
  extraReducers: (builder) => {
    console.log("builder", builder);
    builder.addCase("count/increment", (state) => {
      state.amount--;
    });
  },
  // extraReducers: {
  //   ["count/increment"]: (state) => {
  //     state.amount++;
  //   },
  // },
});

export default amountSlice.reducer;
export const { increment } = amountSlice.actions;
