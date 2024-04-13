import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { BE_URL } from "../../../config";
import { useCookies } from "react-cookie";
import { refetch } from "../../../redux/features/cart/cartSlice";

export default function CardCom({ product }) {
  let [{ token }] = useCookies([]);

  const dispatch = useDispatch();

  const addToCart = (productId) => {
    axios({
      method: "post",
      url: BE_URL + "/cart/create/" + productId,
      headers: {
        authorization: `bearer ` + token,
      },
    })
      .then((res) => {
        dispatch(refetch());
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  };
  return (
    <div>
      <Card
        className="mb-3"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={product?.thumbnail} />
        <CardBody>
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {product.description}
          </CardSubtitle>
          <p>
            <b>Price</b> : <del> {product.price}</del>
            <span>{product.discountPercentage}</span>%
          </p>
          <div className="w-100 d-flex gap-1">
            <Button color="danger" style={{ width: "49%" }}>
              Buy
            </Button>
            <Button
              onClick={() => addToCart(product._id)}
              color="danger"
              style={{ width: "49%" }}
            >
              Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
