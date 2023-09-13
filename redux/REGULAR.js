import redux, { applyMiddleware, createStore } from "redux";
// https://www.freecodecamp.org/news/content/images/2022/06/2.png
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const INC = "INC";
const INC_BY_VALUE = "INC_BY_VALUE";
const DEC = "DEC";
const INTIAL_STATE = "INTIAL_STATE";

const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

function reducer(state = { amount: 0 }, action) {
  console.log("reducer ~ action:", action);
  switch (action.type) {
    case INTIAL_STATE:
      return { amount: action.payload };
    case INC:
      return { amount: state.amount + 1 };
    case DEC:
      return { amount: state.amount - 1 };
    case INC_BY_VALUE:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// action creator
function intialValue(id) {
  console.log("------>", id);
  return async (dispatch, getState) => {
    let { data } = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(data);
    dispatch({ type: INTIAL_STATE, payload: data.amount });
  };
}
function incAction() {
  return { type: INC };
}
function decAction() {
  return { type: DEC };
}
function incByValueAction(x) {
  return { type: INC_BY_VALUE, payload: x };
}
store.dispatch(intialValue(2));
store.dispatch(incAction());
/*
let x = store.getState();
console.log("x:", x);

store.dispatch(decAction());
store.dispatch(incByValueAction(100));

let y = store.getState();
console.log("y:", y);
*/

async function getUser() {
  let { data } = await axios.get("http://localhost:3000/user/2");
  console.log(data);
}
// getUser();
