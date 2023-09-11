import { INC } from "./constant";

export const countReducer = (state = { x: 0 }, action) => {
  switch (action.type) {
    case INC:
      return { x: state.x + 1 };
    default:
      return state;
  }
};

// {count:{count:0}}
