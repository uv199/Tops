import { Button } from "antd";
import { Heart } from "lucide-react";
import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
export default function CardCom(props) {
  return (
    <>
      <Card
        className=" m-3"
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={props?.data?.img} />
        <CardBody>
          <CardTitle tag="h5">{props?.data?.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {props?.data?.price}
          </CardSubtitle>

          <Button
            className="w-50"
            style={{ color: "#ffffff", backgroundColor: "lightcoral" }}
          >
            Buy
          </Button>
          <Button className="w-50" style={{ backgroundColor: "lightcoral" }}>
            <Heart color="#ffffff" />
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
