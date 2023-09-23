import { createSlice } from "@reduxjs/toolkit";
const initialState = { amount: 0 };
const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    incrementByValue: (state, action) => {
      state.amount += action.payload.amountValue;
    },
  },
});

export default amountSlice.reducer;
export const { incrementByValue } = amountSlice.actions;
