import { createSlice } from "@reduxjs/toolkit";

const initialState = { amount: 0 };

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    incAmount: (state, action) => {
      state.amount++;
    },
  },
});

export default amountSlice.reducer;
export const { incAmount } = amountSlice.actions;
