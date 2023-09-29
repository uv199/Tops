import { INC_COUNT, INC_BY_VALUE } from "./constant";

export const incCount = () => {
  return { type: INC_COUNT };
};
export const incCountByValue = (value) => {
  return { type: INC_BY_VALUE, payload: value };
};
