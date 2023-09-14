import { INC_COUNT, INC_COUNT_BY_VAL } from "./constatnt";

export const incCount = () => {
  return { type: INC_COUNT };
};
export const incCountByVal = (no) => {
  console.log("no", no);
  return { type: INC_COUNT_BY_VAL, payload: no };
};
