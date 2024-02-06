import { createSlice } from "@reduxjs/toolkit";

let userData = JSON.parse(localStorage.getItem("loginUser") || "{}");
let userToken = JSON.parse(localStorage.getItem("token") || "");
let authSlice = createSlice({
  name: "auth",
  initialState: { user: userData, token: userToken },
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload?.data;
      state.token = payload?.token;
      console.log("---->1");
      localStorage?.setItem("token", JSON?.stringify(payload?.token));
      localStorage?.setItem("loginUser", JSON?.stringify(payload?.data));
      console.log("---->2");
    },
    logOut: (state, action) => {
      state.user = {};
      state.token = "";
      localStorage?.removeItem("token");
      localStorage?.removeItem("loginUser");
    },
  },
});

export default authSlice.reducer;
export const { loginUser, logOut } = authSlice.actions;
