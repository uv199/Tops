import { ADD_USER } from "./constant";

export const addUser = (value) => {
  return { type: ADD_USER, payload: value };
};
