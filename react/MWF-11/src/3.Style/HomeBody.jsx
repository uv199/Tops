import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

export default function HomeBody() {
  return (
    <div>
      <Header />
      <div className="h-[100px] text-white flex justify-center items-center">
        <h1 className="bg-[#2624b5] hover:bg-blue-400 hover:text-black transition-colors ease-in-out duration-700 rounded-full border border-white p-4">
          Body
        </h1>
      </div>
      <Footer />
      <div className="flex gap-3 p-4 border">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
