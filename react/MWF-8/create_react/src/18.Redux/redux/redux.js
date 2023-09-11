import { createStore } from "redux";
import { countReducer } from "./count/countReducer";

export const store = createStore(countReducer);
