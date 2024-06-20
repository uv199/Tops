import React from "react";
import { Provider } from "react-redux";
import Home from "./ui/Home";
import { store } from "./redux/app";
import User from "./ui/User";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Home />
        <User />
      </Provider>
    </div>
  );
}