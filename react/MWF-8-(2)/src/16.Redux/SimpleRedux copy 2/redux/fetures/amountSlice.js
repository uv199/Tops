import { createSlice } from "@reduxjs/toolkit";

let amountslice = createSlice({
  name: "amount",
  initialState: { amount: 99 },
  reducers: {
    incrementAmount: (state, action) => {
      state.amount++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("count/incrementByUser", (state, action) => {
      console.log("-----------Extra reducer----------->");
      state.amount++;
    });
    builder.addCase("count/decrementCount", (state, action) => {
      state.amount += 10;
    });
  },
});

export default amountslice.reducer;
export const { incrementAmount } = amountslice.actions;
