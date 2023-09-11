import redux, { applyMiddleware, createStore } from "redux";
// https://www.freecodecamp.org/news/content/images/2022/06/2.png
import logger from "redux-logger";

const INC = "INC";
const INC_BY_VALUE = "INC_BY_VALUE";
const DEC = "DEC";

const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state = { count: 0 }, action) {
  console.log("reducer ~ action:", action);
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "INC_BY_VALUE":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

// action creator
function incAction() {
  return { type: INC };
}
function decAction() {
  return { type: DEC };
}
function incByValueAction(x) {
  return { type: INC_BY_VALUE, payload: x };
}

let x = store.getState();
console.log("x:", x);

store.dispatch(incAction());
store.dispatch(decAction());
store.dispatch(incByValueAction(100));

let y = store.getState();
console.log("y:", y);
