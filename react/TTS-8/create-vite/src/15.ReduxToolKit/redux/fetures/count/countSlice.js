import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 999 };

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {},
  extraReducers: {
    ["nameList/addName"]: (state, action) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("nameList/addName", (state, action) => {
      state.count++;
    });
  },
});

export default countSlice.reducer;
