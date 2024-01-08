import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";

export default function StyleHome() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Body />
        <Body />
      </div>
      <Footer />
    </div>
  );
}
