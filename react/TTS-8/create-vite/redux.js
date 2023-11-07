import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const INC = "INCREMRNT";
const DEC = "DEC";
const SET_VALUE = "SET_VALUEF";

const store = redux.createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

// let store = { count: { count: 0 }, amount: { amount: 0 } };

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case SET_VALUE:
      return { count: action.value };
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case SET_VALUE:
      return { count: action.value };
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// action creator
function incAction(params) {
  return { type: INC };
}
function setAction(id) {
  return async (dispatch) => {
    const fetchData = await axios.get(`https://dummyjson.com/products/${id}`);
    return dispatch({ type: SET_VALUE, value: fetchData.data.price });
  };
}

store.dispatch(setAction(1));
store.dispatch(incAction());
store.dispatch(incAction());

// fetch api
// async function getData(params) {
//   const fetchData = await axios.get("https://dummyjson.com/products/2");
//   console.log("fetchData", fetchData.data.price)
// }
// getData()
