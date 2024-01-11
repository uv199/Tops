import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card as StrapCard,
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";

export default function Card({ product }) {
  const navigate = useNavigate();
  const redirectHandler = () => {
    console.log("redired");
    navigate(`/shose/${product?._id}`);
  };
  const wichListHandler = () => {
    console.log("-----------  wichListHandler----------->");
  };
  const token = useSelector((state) => state?.authReducer?.token);
  const addToCart = () => {
    console.log("-----------  token----------->", token);
    if (token) {
      axios
        .post(
          `${BE_URL}/cart/create/${product?._id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toast.success("product added succesfully");
        })
        .catch((err) => {
          console.log("-----------  err----------->", err);
          toast.error(err.response.error);
        });
    } else {
      //  open login popup
      toast.warn("Please do login");
    }
  };

  return (
    <>
      <StrapCard>
        <img
          alt="Sample"
          src={product?.thumbnail}
          style={{ width: "100%", height: "250px" }}
          onClick={redirectHandler}
        />
        <CardBody>
          <div onClick={redirectHandler}>
            <CardTitle tag="h5">{product?.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              $ {product?.price}.00
            </CardSubtitle>
            <CardText>{product?.description}</CardText>
          </div>
          <div className="d-flex gap-2">
            <Button color="danger" className="w-100" onClick={addToCart}>
              <ShoppingCart color="#ffffff" />
            </Button>
            <Button onClick={wichListHandler} color="danger" className="w-100">
              <Heart color="#ffffff" fill="#ffffff" />
            </Button>
          </div>
        </CardBody>
      </StrapCard>
    </>
  );
}

// axios.post(url,{},header,query)

// axios({
//   url:"",
//   headers:""
// })
