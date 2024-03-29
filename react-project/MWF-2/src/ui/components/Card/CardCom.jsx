import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function CardCom({ product }) {
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
            <Button color="danger" style={{ width: "49%" }}>
              Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
