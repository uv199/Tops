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
    incByInput: (state, action) => {
      console.log("-----------  action----------->", action);

      state.count += +action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("amount/incAmt", (state, action) => {
      state.count += 10;
    });
  },
});

export default countSlice.reducer;
export const { incOne, incTen, incByInput } = countSlice.actions;

// x = 10

// x += 10
