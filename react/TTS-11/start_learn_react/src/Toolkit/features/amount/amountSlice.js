import { createSlice } from "@reduxjs/toolkit";

const initialState = { amount: 0 };

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount++;
    },
  },
  extraReducers: {
    ["count/increment"]: (state, { payload }) => {
      console.log("state", state)
      state.amount += payload;
    },
  },
});

export default amountSlice.reducer;
export const { increment } = amountSlice.actions;
