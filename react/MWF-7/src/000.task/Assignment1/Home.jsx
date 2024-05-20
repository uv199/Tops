import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FruitsCard from "./FruitsCard";
import fruitData from "./data.json";

export default function Home() {
  return (
    <div>
      <Header data={"hello world"} />
      <div className="flex">
        {fruitData?.map((e) => {
          return (
            <div className="h-[150px]">
              <FruitsCard data={e} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
