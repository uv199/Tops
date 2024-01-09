import React, { useState } from "react";
// import Data from "../../../../../../JS-assignment/product.json";
import Data from "../data.json";
import Header from "./Header";
import CardCom from "./CardCom";

export default function HomePage() {
  let [productData, setProductData] = useState(Data);
  console.log("-----------  productData----------->", productData);
  return (
    <div>
      <Header />
      <div className="product_container">
        {productData?.map((e, i) => {
          return <CardCom key={i} product={e} />;
        })}
      </div>
    </div>
  );
}
