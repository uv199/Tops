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
  extraReducers: {
    ["count/increment"]: (state, action) => {
      console.log("-----------");
      state.amount += 100;
    },
  },
});

export default amountSlice.reducer;
export const { incrementByValue } = amountSlice.actions;
