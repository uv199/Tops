import React, { useState } from "react";
import { Breadcrumb, Layout } from "antd";
import HomeContetnt from "./HomeContetnt";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../Redux/fetures/product/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);


  return (
    <Layout className="layout">
      <HomeContetnt />
    </Layout>
  );
};
export default Home;
