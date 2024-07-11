import React, { useEffect, useState } from "react";
import ViewSection from "./ViewSection";
import Filter from "./Filter";
import CardComponent from "../../../componenet/Card/CardComponent";
import { APIinstance } from "../../../api/axiosConfig";

export default function Collection() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () => {
      try {
        let { data } = await APIinstance.get("/product/getAll");
        setProducts(data?.data);
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
      }
    };
    getproducts();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        {/* <CardComponent /> */}
        {/* <ViewSection /> */}
        <div className="flex gap-5">
          <div className="w-[25%]">
            <Filter />
          </div>
          <div className="w-[70%]">
            <div className="grid grid-cols-3 gap-4">
              {products?.map((e, i) => {
                return (
                  <div key={i}>
                    <CardComponent product={e} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
