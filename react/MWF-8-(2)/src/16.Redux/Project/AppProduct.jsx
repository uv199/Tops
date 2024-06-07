import React from "react";
import ProductRedux from "./ProductRedux";
import { Provider } from "react-redux";
import { store } from "./Redux/app";

export default function AppProduct() {
  return (
    <div>
      <Provider store={store}>
        <ProductRedux />
      </Provider>
    </div>
  );
}
