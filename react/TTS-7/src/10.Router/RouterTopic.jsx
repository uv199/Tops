import React from "react";
import App from "./SimpleRoute/App";
import AppDynamic from "./dynamicRoute/App";
import ProtectedApp from "./ProtectedRoute/App";

export default function RouterTopic() {
  return (
    <div>
      {/* <App /> */}
      {/* <AppDynamic /> */}
      <ProtectedApp />
    </div>
  );
}
