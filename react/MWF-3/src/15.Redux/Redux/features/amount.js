import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 90 },
  reducers: {
    incAmount: (state, action) => {
      state.amount++;
    },
    incAmt5: (state, action) => {
      console.log("-----------  action----------->", action)
      state.amount += 5;
    },
  },
});

export default amountSlice.reducer;
export const { incAmount, incAmt5 } = amountSlice.actions;
