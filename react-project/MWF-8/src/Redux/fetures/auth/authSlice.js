import { createSlice } from "@reduxjs/toolkit";

let token = localStorage.getItem("token");
let user = localStorage.getItem("user");

const initialState = {
  user: JSON.parse(user) || {},
  token: JSON.parse(token),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action?.payload?.data));
      state.user = action?.payload?.data;
      state.token = action?.payload?.token;
    },
    logOut: (state) => {
      state.user = {};
    },
  },
});

export default authSlice.reducer;
export const { login, logOut } = authSlice.actions;
