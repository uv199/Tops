import React from "react";
import ViewSection from "./ViewSection";
import Filter from "./Filter";
import CardComponent from "../../../componenet/Card/CardComponent";

export default function Collection() {
  return (
    <>
      <CardComponent />
      <ViewSection />
      <div className="flex bg-red-500">
        <div className="w-1/4">
          <Filter />
        </div>
        {/* <div className="w-[75%]">
            {[...new Array(5)].map(() => {
            })}
          </div> */}
      </div>
    </>
  );
}
