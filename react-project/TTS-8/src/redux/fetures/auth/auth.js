import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "teshghjag",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (state, action) => {},
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
