import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
  name: "count",
  initialState: { count: 1000, count2: 999 },
  reducers: {
    incrementCount: (state, action) => {
      state.count++;
    },
    incrementcunt2: (state, action) => {
      state.count2++;
    },
    decrementCount: (state, action) => {
      state.count--;
    },
    incByInput: (state, action) => {
      console.log("-----------  action----------->", action);
      state.count += action?.payload;
    },
  },
});

export default countSlice.reducer;
export const { incrementCount, incrementcunt2, decrementCount, incByInput } =
  countSlice.actions;
