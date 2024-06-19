import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[10px] bg-blue-500"></div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
