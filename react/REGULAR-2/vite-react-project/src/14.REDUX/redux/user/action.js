import { ADD_USER } from "./constanat";

export const addUserAction = (data) => {
  return { type: ADD_USER, payload: data };
};
