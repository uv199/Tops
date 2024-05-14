import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardCom from "./CardCom";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="d-flex my-4 border border-dark justify-content-center">
        <h1 className="text-danger">body</h1>
      </div>
      <CardCom />
      <Footer />
    </div>
  );
}
