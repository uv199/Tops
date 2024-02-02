import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: "" },
  reducers: {
    loginUser: (state, action) => {
      state.user = action?.payload?.data;
      state.token = action?.payload?.token;
      localStorage?.setItem("token", JSON?.stringify(token));
      localStorage?.setItem("loginUser", JSON?.stringify(data));
    },
  },
});

export default authSlice.reducer;
export const { loginUser } = authSlice.actions;
