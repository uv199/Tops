import { createSlice } from "@reduxjs/toolkit";
import { useCookies } from "react-cookie";

const initialState = { user: {}, token: "" };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.data;
      state.token = payload.token;
    },
    logout: (state, action) => {
      console.log("logout");
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
