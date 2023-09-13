import { createStore } from "redux";
import { countReducer } from "./count/reducer";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer);
