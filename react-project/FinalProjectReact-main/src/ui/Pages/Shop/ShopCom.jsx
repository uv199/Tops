import React, { useEffect, useState } from "react";
import Slides from "./Slides";
import {
  fetchData,
  topFiveData,
} from "../../../redux/fetures/ProductSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ShopCard from "./ShopCard";
import { useNavigate } from "react-router-dom";

export default function ShopCom() {
  let [allProduct, setAllProduct] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  dispatch(topFiveData());
  const Data = useSelector((state) => state?.productReducer?.product);
  useEffect(() => {
    setAllProduct(Data);
  }, [Data]);
  const redirectToProductPage = (id) => {
    navigate(`/productpage/${id}`);
  };
  return (
    <>
      <Slides />
      <div
        style={{ backgroundColor: "#fceec4" }}
        className="d-flex flex-wrap gap-3 p-3"
      >
        {allProduct?.map((e) => {
          return (
            <ShopCard key={e?._id} data={e} onCLick={redirectToProductPage} />
          );
        })}
      </div>
    </>
  );
}
