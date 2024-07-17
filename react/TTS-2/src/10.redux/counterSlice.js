import { combineSlices, createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
  name: "count",
  initialState: { count: 190, count2: 500 },
  reducers: {
    inc: (state, action) => {
      state.count++;
    },
    dec: (state, action) => {
      state.count--;
    },
  },
});

export default countSlice.reducer;

export const { inc,dec } = countSlice.actions;
// export const counterAction = countSlice.actions;
