import React, { useState } from "react";
import Card from "./card";
import Data from "./data.json";

export default function MapProject() {
  let [productArr, setProductArr] = useState(Data);
  // store data into state and then use state not data directly
  return (
    <>
      <h1>PRODUCTS</h1>
      <hr />
      <div className="d-flex gap-3 m-4 flex-wrap">
        {productArr?.map?.((e, i) => {
          return (
            <>
              <Card product={e} key={e?._id} />
            </>
          );
        })}
      </div>
    </>
  );
}
