import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";

export default function CssProject1() {
  return (
    <div>
      <Header />
      <div className="bodyDiv">Body</div>
      <Footer color="red" />
      <Footer color="green" />
    </div>
  );
}
