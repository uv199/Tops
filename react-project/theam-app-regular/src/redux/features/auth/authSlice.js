import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  err: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      console.log("payload", payload);
      state.user = payload?.data;
      state.token = payload?.token;
      localStorage.setItem("user", JSON.stringify(payload?.data));
      localStorage.setItem("token", JSON.stringify(payload?.token));
    },
    logOut: (state) => {
      state.user = {};
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;

export const { login, logOut } = authSlice.actions;
