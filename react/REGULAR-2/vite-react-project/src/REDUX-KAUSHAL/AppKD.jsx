import React from "react";
import CountCom from "./CountCom";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";
import UserForm from "./ui/UserForm";
import UserTable from "./ui/UserTable";

export default function AppCom() {
  return (
    <>
      <Provider store={store}>
        {/* <CountCom /> */}
        <UserForm />
        <UserTable />
      </Provider>
    </>
  );
}
