import React, { useEffect, useState } from "react";
import Card from "../../component/card/Card";
import Slide from "../../component/Slider/Slide";
import { Col, Nav, NavItem, NavLink, Row, TabPane } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../redux/features/product/ProductSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { BE_URL } from "../../../config";
import { fetchCardData } from "../../../redux/features/cart/cartslice";

export default function Shop() {
  let [productArr, setProductArr] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("-----?");
    dispatch(fetchProduct());
  }, []);
  let fetchData = useSelector((state) => state.productReducer.product);
  console.log("fetchData", fetchData);

  useEffect(() => {
    console.log("--333---?");
    setProductArr(fetchData);
  }, [fetchData]);

  const openProject = (id) => {
    axios
      .delete(`${BE_URL}/product/getById/${id}`)
      .then((resData) => {
        dispatch(removeProduct(index));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const addTocart = (id) => {
    const data = {
      products: [
        {
          productId: id,
          count: 1,
        },
      ],
    };
    console.log("data", data);
    axios({
      method: "post",
      url: `${BE_URL}/cart/create`,
      data,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        dispatch(fetchCardData());
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err.message);
      });
  };

  //   products: [{
  //     productId: "_id ",
  //     count: 1
  // }],
  return (
    <>
      <Slide />

      <div className=" mt-5">
        <Nav tabs>
          <NavItem>
            <NavLink className="" onClick={function noRefCheck() {}}>
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="active" onClick={function noRefCheck() {}}>
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="product-section">
        <div className="m-4">
          <div className="d-flex flex-row flex-wrap gap-5 justify-content-center  ">
            <div className="w-100 d-flex flex-wrap gap-5">
              {productArr.map((e, i) => {
                return (
                  <Card
                    key={i}
                    data={e}
                    openProduct={openProject}
                    onClickEvent={addTocart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
