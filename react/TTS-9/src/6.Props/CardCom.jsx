import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function CardCom(props) {
  console.log("props", props);
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">
          {props?.data?.title ?? " Title Unavailable"}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props?.data?.price} Rs.
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        {props?.data?.price} Rs. After Discount Price
        </CardSubtitle>

        <CardText>{props?.data?.description}</CardText>
        <Button color="danger" className="w-100">
          Button
        </Button>
      </CardBody>
    </Card>
  );
}

// without object
/*
export default function CardCom(props) {
    console.log("props", props);
    return (
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.price} Rs.
          </CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button color="danger" className="w-100">Button</Button>
        </CardBody>
      </Card>
    );
  }
  */
