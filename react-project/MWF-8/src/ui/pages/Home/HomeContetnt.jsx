import React, { useContext, useEffect, useState } from "react";
import CardCom from "../../components/CardCom";
import ShoseData from "../../../utils/shose.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomeContetnt() {
  let [allProduct, setAllProduct] = useState([]);
  let allData = useSelector((state) => state.productReducer.products);
  const navigate = useNavigate();
  useEffect(() => {
    setAllProduct(allData);
  }, [allData]);
  return (
    <>
      <div
        className="site-layout-content ms-auto d-flex flex-wrap "
        style={{
          gap: "10px",
        }}
      >
        {allProduct?.map?.((e, i) => {
          return (
            <CardCom
              key={i + Math.random()}
              data={e}
              onclick={() => navigate(`productpage/${e?._id}`)}
            />
          );
        })}
      </div>
    </>
  );
}
