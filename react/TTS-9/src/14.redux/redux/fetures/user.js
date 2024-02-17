import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: [] },
  reducers: {
    addUser: (state, action) => {
      // logic
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
