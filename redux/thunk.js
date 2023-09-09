import redux, { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const INC = "increment";

let store = redux.createStore(
  countReducer,
  applyMiddleware(logger.default, thunk.default)
);

function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INC:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

// action genarator
function incAction(id) {
  return async (dispatch, getState) => {
    let { data } = await axios.get(`http://localhost:3000/data/${id}`);
    return dispatch({ type: INC, payload: data?.x });
  };
}

store.dispatch(incAction(2));

store.getState();
