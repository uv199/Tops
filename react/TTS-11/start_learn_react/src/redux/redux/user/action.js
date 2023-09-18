import { ADD_USER } from "./constant";

export const addUser = (data) => {
  return { type: ADD_USER, payload: data };
};
