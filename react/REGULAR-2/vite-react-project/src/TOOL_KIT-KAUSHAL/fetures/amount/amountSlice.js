import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    incAmount: (state) => {
      state.amount++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("count/incCount", (state, action) => {
      state.amount += 100;
    });
  },
  //   extraReducers: {
  //     ["count/incCount"]: (state) => {
  //       state.amount += 100;
  //     },
  //   },
});

export default amountSlice.reducer;

export const { incAmount } = amountSlice.actions;
