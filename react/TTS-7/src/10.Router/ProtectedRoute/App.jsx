import React from "react";
import Router from "./Router";
import { CookiesProvider } from "react-cookie";

export default function App() {
  return (
    <div>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <Router />
      </CookiesProvider>
    </div>
  );
}
