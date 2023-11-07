import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { nameArr: [] };

export const fetchUser = createAsyncThunk("nameList/fetchData", (id) => {
  return axios({
    method: "get",
    url: `https://fakestoreapi.com/users/${id}`,
  })
    .then((res) => {
      // console.log("res", res);
      let { firstname, lastname } = res?.data?.name;
      return firstname + " " + lastname;
    })
    .catch((err) => {
      console.log("err", err);
    });
});

const nameslice = createSlice({
  name: "nameList",
  initialState,
  reducers: {
    addName: (state, action) => {
      console.log("action", action);
      state.nameArr.push(action.payload);
    },
    updateName: (state, { payload }) => {
      state.nameArr.splice(payload?.index, 1, payload?.newData);
    },
    removeName: (state, action) => {
      console.log("action", action);
      state.nameArr.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.nameArr.push(action.payload);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("action---->");
      });
  },
});

export default nameslice.reducer;
export const { addName, updateName, removeName } = nameslice.actions;
