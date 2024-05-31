import { createSlice } from "@reduxjs/toolkit";

let amountslice = createSlice({
  name: "amount",
  initialState: { amount: 99 },
  reducers: {
    incrementAmount: (state, action) => {
      state.amount++;
    },
  },
});

export default amountslice.reducer;
export const { incrementAmount } = amountslice.actions;
