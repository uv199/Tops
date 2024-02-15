import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import User from "./ui/User";
import Product from "./ui/Product";

export default function AppReduxCrud() {
  return (
    <Provider store={store}>
      <User />
      <Product />
    </Provider>
  );
}
