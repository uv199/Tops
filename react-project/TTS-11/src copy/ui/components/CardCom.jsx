import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { ShoppingBag, Heart } from "lucide-react";

export default function CardCom({ data }) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={data?.imageURL} />
        <CardBody>
          <CardTitle tag="h5">{data?.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {data?.price}
          </CardSubtitle>
          <Button
            style={{ width: "45%" }}
            className=" m-1"
            color="danger"
            outline
          >
            <ShoppingBag />
          </Button>
          <Button
            style={{ width: "45%" }}
            className="m-1"
            color="danger"
            outline
          >
            <Heart />
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
