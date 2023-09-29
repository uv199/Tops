import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = { user: {}, token: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action?.payload.data;
      state.token = action?.payload?.token;
      localStorage.setItem("user", JSON.stringify(action?.payload?.data));
      localStorage.setItem("token", JSON.stringify(action?.payload?.token));
    },
    logOut: (state) => {
      state.user = {};
      state.token = "";
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
