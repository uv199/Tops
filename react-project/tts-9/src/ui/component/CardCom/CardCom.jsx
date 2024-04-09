import axios from "axios";
import React from "react";
import {

  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function CardCom({ product }) {
  const addCardHandler = () => {
    axios({
      method: "post",
      url: `http://localhost:9999/cart/create/${product._id}`,
      headers: {
        authorization: "Bearer token",// one space
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        toast.success("product added");
      })
      .catch((err) => {
        toast.error("not found");
      });
  };
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={product?.thumbnail} />
        <CardBody>
          <CardTitle tag="h5"> {product.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {product.description}
          </CardSubtitle>
          <CardText>
            <p>
              {" "}
              <b>Price : </b> {product?.price}
            </p>
          </CardText>
          <Button onClick={addCardHandler}>Add Card</Button>
        </CardBody>
      </Card>
    </div>
  );
}
