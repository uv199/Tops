import { combineReducers } from "redux";
import { countReducer } from "./count/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  COUNT: countReducer,
  USER: userReducer,
});
