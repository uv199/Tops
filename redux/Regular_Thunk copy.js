import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const INTIAL_STATE = "INTIAL_STATE";

const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

function reducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case INTIAL_STATE:
      return { amount: action.payload };
    default:
      return state;
  }
}


function intialValyueAction(id) {
  return async (dispatch, getState) => {
    let { data } = await axios.get(`http://localhost:3000/user/${id}`);
    console.log("---->", data);
    dispatch({ type: INTIAL_STATE, payload: data.amount });
  };
}

store.dispatch(intialValyueAction(2));
