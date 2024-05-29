import React from "react";
import User from "./User";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function ReduxCrud() {
  return (
    <div>
      <Provider store={store}>
        <User />
      </Provider>
    </div>
  );
}
