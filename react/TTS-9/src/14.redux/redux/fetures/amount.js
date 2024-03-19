import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 100 },
  reducers: {
    incAmt: (state, action) => {
      console.log("-----------  action----------->", action);
      state.amount++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("userLogin/fulfilled", (state, action) => {
      state.amount++;
    });
  },
});

export default amountSlice.reducer;
export const { incAmt } = amountSlice.actions;
