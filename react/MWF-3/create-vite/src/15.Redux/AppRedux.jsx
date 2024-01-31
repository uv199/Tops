import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store";
import Counter from "./ui/pages/Counter";

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
