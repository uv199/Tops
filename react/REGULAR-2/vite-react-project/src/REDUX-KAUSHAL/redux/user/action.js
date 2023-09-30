import axios from "axios";
import { ADD_USER, ADD_USER_FROM_API } from "./constant";

export const addUser = (value) => {
  return { type: ADD_USER, payload: value };
};

export const addUserIdByApi = (id) => {
  console.log("id", id);
  return (dispatch, getState) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log("res", res.data);
        dispatch({
          type: ADD_USER_FROM_API,
          payload: { email: res?.data?.email, passwod: res?.data?.name },
        });
      });
  };
};
