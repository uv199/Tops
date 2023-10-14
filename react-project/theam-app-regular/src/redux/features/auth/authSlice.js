import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: JSON.parse(localStorage.getItem("token")) || "",
  err: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload?.data;
      state.token = payload?.token;
      localStorage.setItem("user", JSON.stringify(payload?.data));
      localStorage.setItem("token", JSON.stringify(payload?.token));
    },
    logOut: (state) => {
      state.user = {};
      state.token = "";
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;

export const { login, logOut } = authSlice.actions;
