import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./AllBrand.css";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import axios from "axios";
import { BE_URL } from "../../../../../../../Config";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../../../../../../Redux/Fetures/cart/cart";

export default function AllBrandDetails() {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  // Load reviews for the specific product from local storage when component mounts
  useEffect(() => {
    axios({
      method: "get",
      url: BE_URL + `/product/getProductById/${id}`,
    })
      ?.then((res) => {
        setReviews(res?.data?.data);
      })
      ?.catch((err) => {
        console.log(err);
        toast.error("Failed to load product details");
      });
  }, []);

  // Add Review
  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  // Delete Review
  const deleteReview = (index) => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
  };

  const data = useSelector((state) => state?.authSlice?.token);
  const dispatch = useDispatch();
  // cart
  const addCardHandler = () => {
    axios({
      method: "post",
      url: BE_URL + `/cart/create/${id}`,
      headers: {
        authorization: `Beare ${data}`,
        "Content-Type": "application/json",
      },
    })
      ?.then((res) => {
        // console.log("-----------  res----------->", res?.data?.data)
        dispatch(fetchCart());
        toast.success("success");
        // setFilter(res?.data?.data)
      })
      ?.catch((err) => {
        console.log("-----------  err----------->", err);
        toast.error("Failed to load product details");
      });
    // console.log(id)
  };

  return (
    <>
      <div className="d-flex gap-3 ms-5 ps-4 pt-3 pb-3 collection">
        <NavLink
          to={"/"}
          className="text-decoration-none home"
          style={{ color: "black", opacity: "0.58" }}
        >
          Home
        </NavLink>
        <div style={{ opacity: "0.58" }}>/</div>
        <div>Collection</div>
        <div style={{ opacity: "0.58" }}>/</div>
        <div style={{ opacity: "0.58" }}>{reviews?.brand}</div>
        <div style={{ opacity: "0.58" }}>/</div>
        <div style={{ opacity: "0.58" }}>{reviews?.title}</div>
      </div>
      <div
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          marginBottom: "30px",
        }}
      ></div>

      <div className="d-flex border dark">
        <img
          className="w-50"
          src={
            reviews?.thumbnail ||
            (reviews?.images?.length > 0 ? reviews?.images[0] : null)
          }
          alt={`${reviews?.title} - Selected Image`}
        />

        <div className="p-5" style={{ flex: "1" }}>
          <p className="m-0">{reviews?.title}</p>
          <h1 style={{ letterSpacing: "1px", fontFamily: "sans-serif" }}>
            {reviews?.description}
          </h1>
          <p style={{ fontSize: "23px" }}>
            ₹ {reviews?.price - reviews?.discountPercentage}.00 MRP(inclusive of
            taxes):{" "}
            <span
              className="text-decoration-line-through"
              style={{ color: "gray" }}
            >
              ₹ {reviews?.price}.00
            </span>
          </p>
          <Button
            className="w-100 bg-black rounded-5 mt-4 mb-3"
            onClick={() => addCardHandler()}
          >
            Add To Cart
          </Button>
          {/* Render images as thumbnails */}
          <div className="d-flex">
            {reviews?.images?.map((image, index) => {
              return (
                <div>
                  <img
                    key={index}
                    role="button"
                    className="mt-4 me-4 mb-5 rounded-circle"
                    src={image}
                    alt={`${reviews?.title} -   Image ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                    height="93px"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p style={{ fontSize: "20px", marginBottom: "0px" }}>
              share:
              <a
                href="https://twitter.com/"
                target="_blank"
                style={{ color: "black", fontSize: "25px" }}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="ps-3 pe-3"
                  role="button"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ color: "black", fontSize: "25px" }}
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="pe-3"
                  role="button"
                />
              </a>
              <a
                href="https://in.pinterest.com/"
                target="_blank"
                style={{ color: "black", fontSize: "25px" }}
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="pe-3"
                  role="button"
                />
              </a>
            </p>
            <ReviewForm style={{ flex: "1" }} addReview={addReview} />
          </div>

          {/* <ReviewList reviews={reviews} deleteReview={deleteReview} /> */}
        </div>
      </div>
    </>
  );
}
