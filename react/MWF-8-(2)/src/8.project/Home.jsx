import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Home() {
  return (
    <div
      style={{ width: "100vw" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
