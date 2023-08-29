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
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" style={{ height: "300px" }} src={props.data.img} />
        <CardBody>
          <CardTitle tag="h5">{props.data.title}</CardTitle>
          <CardText>{props.data.dec}</CardText>
          <Button style={{ backgroundColor: "lightcoral" }}>Buy Now</Button>
        </CardBody>
      </Card>
    </>
  );
}
