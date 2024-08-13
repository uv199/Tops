import React from "react";
import Count from "./Count";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Amount from "./Amount";
import img from "./Count";
import Product from "./Product";

export default function ReduxApp() {
  return (
    <div>
      <Provider store={store}>
        {/* <img
          className="w-[150px]"
          alt="test"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1612490689624-dc01325cc885?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaGVhcnR8ZW58MHx8MHx8fDA%3D";
          }}
          src={img}
        /> */}
        {/* <Count /> */}
        {/* <Amount /> */}
        <Product />
      </Provider>
    </div>
  );
}
