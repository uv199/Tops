import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCount } from "../count/countSlice";
const initialState = {
  amount: 2000,
};
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
    builder.addCase(incrementCount, (state) => {
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
