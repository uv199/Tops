import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {} };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    login: (state) => {},
    logOut: (state) => {},
    getUser: (state) => {},
  },
});

export default authSlice.reducer;
