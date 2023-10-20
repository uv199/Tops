import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../Redux/fetures/product/productSlice";
import CardCom from "../../components/CardCom";

export default function Men() {
  let [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const data = useSelector((state) => state?.productReducer?.products);
  useEffect(() => {
    setAllData(data);
  }, [data]);

  useEffect(() => {});
  return (
    <>
      <div
        className="site-layout-content ms-auto d-flex flex-wrap "
        style={{
          gap: "10px",
        }}
      >
        {allData?.map?.((e, i) => {
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
