import { createSlice } from "@reduxjs/toolkit";

let amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 1000 , name : "" },
  reducers: {
    incAmount: (state, action) => {
      console.log("===state");
      state.amount++;
    },
    nameInput: (state, action) => {
        state.amount += action.payload;
    },
    userInput: (state, action) => {
        state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("count/incByInput", (state, action) => {
      state.amount += action.payload;
    });
  },
});

export default amountSlice.reducer;
export const { incAmount, nameInput ,userInput } = amountSlice.actions;
