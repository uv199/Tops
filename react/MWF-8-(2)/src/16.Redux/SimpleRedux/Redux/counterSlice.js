import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    incrementCount: (state, action) => {
      console.log("-----------  state----------->", state.count);
      state.count++;
    },
    decrementCount: (state, action) => {
      state.count--;
    },
    resetCount: (state, action) => {
      state.count = 0;
    },
  },
});

export default counterSlice.reducer;
// export const action = counterSlice.actions;
export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;
