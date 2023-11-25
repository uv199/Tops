import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 999 },
  reducers: {
    inc: (state, action) => {
      console.log("state---", state);
      state.count++;
    },
    dec: (state, action) => {
      state.count--;
    },
  },
});

export default countSlice.reducer;
export const { inc, dec } = countSlice.actions;
