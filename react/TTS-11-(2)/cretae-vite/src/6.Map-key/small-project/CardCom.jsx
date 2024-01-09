import { Heart, ShoppingCart } from "lucide-react";
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
        className="mt-4"
        style={{
          width: "18rem",
        }}
      >
        <img
          style={{ maxHeight: "200px" }}
          src={product?.image}
          alt="nothing"
        />
        <CardBody>
          <CardTitle tag="h5">{product?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {product?.price}.00 $
          </CardSubtitle>
          <CardText>{product?.description}</CardText>
          <div className="d-flex gap-1">
            <Button className="w-50" color="danger">
              <ShoppingCart />
            </Button>
            <Button className="w-50" color="danger">
              <Heart color="#ffffff" />
              {/* <Heart size={40} color="#ffffff" /> */}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
