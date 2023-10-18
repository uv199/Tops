import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";

// axios.get("url")
(function callApi(params) {
  axios
    .get("http://localhost:3000/users/1")
    .then((res) => {
      console.log("res", res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
})();

const INC = "INC";
const DEC = "DEC";
const INC_VALUE = "INC_VALUE";

const store = redux.createStore(reducer, applyMiddleware(logger.default));

function reducer(state = { count: 999 }, action) {
  console.log("action---->", action);
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case INC_VALUE:
      return { count: state.count + action.value };
    default:
      return state;
  }
}

// action genarator

function incAction(params) {
  return { type: INC };
}

function decAction(params) {
  return { type: DEC };
}

function incByValueAction(x) {
  return { type: INC_VALUE, value: x };
}

let x = store.getState();
console.log("x", x);
// store.dispatch(incByValueAction(10000000));
// store.dispatch({ type: INC });
store.dispatch(incAction());
// store.dispatch(decAction());

let y = store.getState();
