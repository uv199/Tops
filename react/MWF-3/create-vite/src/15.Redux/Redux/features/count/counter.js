import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { count: 900 },
  reducers: {},
});

export default countSlice.reducer;
