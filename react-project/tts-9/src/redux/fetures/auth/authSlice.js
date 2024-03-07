import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: "" },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload.data;
      state.token = payload.token;
      localStorage.setItem("userLogin", JSON.stringify(payload.data));
      localStorage.setItem("token", JSON.stringify(payload.token));
    },
    logOut: (state, action) => {},
  },
});

export default authSlice.reducer;
export const { login, logOut } = authSlice.actions;
