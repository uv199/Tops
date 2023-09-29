import { INC_BY_VALUE, INC_COUNT } from "./constant";

export const countReducer = (state = { count: 100 }, action) => {
  switch (action.type) {
    case INC_COUNT:
      return { count: state.count + 1 };
    case INC_BY_VALUE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
