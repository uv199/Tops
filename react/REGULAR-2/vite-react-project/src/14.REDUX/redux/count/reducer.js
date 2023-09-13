import { INC_COUNT } from "./constant";

export const countReducer = (state = { count: 100 }, action) => {
  switch (action.type) {
    case INC_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};
