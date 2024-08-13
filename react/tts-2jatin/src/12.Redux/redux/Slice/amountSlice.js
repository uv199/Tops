import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 10 },
  reducers: {
    incrementAmt: (state) => {
      state.amount++;
      
    },
  },
});

export default amountSlice.reducer;
export const { incrementAmt } = amountSlice.actions;
