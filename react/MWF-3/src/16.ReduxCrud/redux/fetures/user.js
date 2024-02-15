import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: [] },
  reducers: {},
});

export default userSlice.reducer;
