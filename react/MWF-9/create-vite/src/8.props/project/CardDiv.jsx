import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function CardDiv(props) {
  console.log("props", props);
  return (
    <>
      <h1>Card</h1>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={props?.data?.img} />
        <CardBody>
          <CardTitle tag="h5">{props?.data?.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Price : {props?.data?.price} $
          </CardSubtitle>
          <Button color="danger" className="w-100">
            Buy
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
