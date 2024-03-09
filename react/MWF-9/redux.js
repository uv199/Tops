import axios from "axios";
import redux, { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// constatnt
const ADD_USER = "ADD_USER";

// store
const store = redux.createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

//reducer function
function reducer(state = { user: [] }, action) {
  console.log("state", state);
  // console.log("action----->", action);

  switch (action.type) {
    case ADD_USER:
      return { user: [...state.user, action.payload] };
    default:
      return state;
  }
}

// action generator
function addUserToStore(id) {
  // console.log("data", data);
  return async (dispatch) => {
    const response = await axios({
      method: "get",
      url: `https://fakestoreapi.com/users/${id}`,
    });
    // console.log("response", response.data);
    let newObj = {
      id: response.data.id,
      email: response.data.email,
      username: response.data.username,
    };
    return dispatch({ type: ADD_USER, payload: newObj });
  };
}

store.dispatch(addUserToStore(1));
store.dispatch(addUserToStore(2));
