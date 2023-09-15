import { ADD_USER } from "./constatnt";

export const addUser = (data) => {
  console.log("data", data);
  return { type: ADD_USER, payload: data };
};
