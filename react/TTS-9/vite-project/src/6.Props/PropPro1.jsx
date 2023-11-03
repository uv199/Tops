import React from "react";
import DATA from "../../../../../JS-assignment/product.json";
import CardCom from "./CardCom";

export default function PropPro1() {
  console.log("DATA", DATA);
  return (
    <>
      <div
        className="d-flex flex-wrap gap-2 m-5 p-3"
        style={{ backgroundColor: "lightgrey" }}
      >
        {DATA.map((e) => {
          return (
            <CardCom data={e} />
            // without object
            // <CardCom
            //   name={e.title}
            //   price={e.price}
            //   description={e.description}
            // />
          );
        })}
      </div>
    </>
  );
}
