import { createSlice } from "@reduxjs/toolkit";

let amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 1000, name: "" },
  reducers: {
    incAmount: (state, action) => {
      console.log("===state");
      state.amount++;
    },
    amtIncByValue: (state, action) => {
      state.amount += action.payload;
    },
    addName: (state, action) => {
      state.name += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("count/incByInput", (state, action) => {
      state.amount += action.payload;
    });
  },
});

export default amountSlice.reducer;
export const { incAmount, amtIncByValue, addName } = amountSlice.actions;
