import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 999 },
  reducers: {
    incOne: (state, action) => {
      console.log("-----------  state----------->", state.count);
      state.count++;
    },
    incTen: (state, action) => {
      state.count += 10;
    },
  },
});

export default countSlice.reducer;
export const { incOne, incTen } = countSlice.actions;

// x = 10

// x += 10
