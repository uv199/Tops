import { Button } from "antd";
import { Heart } from "lucide-react";
import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
export default function CardCom(props) {
  const clickButton = () => {
    console.log("---===---");
  };
  return (
    <>
      <Card
        className=" m-3"
        style={{
          width: "18rem",
        }}
      >
        <img
          onClick={props?.onclick}
          alt="Sample"
          style={{ height: "200px" }}
          src={props?.data?.thumbnail}
        />
        <CardBody>
          <div onClick={props?.onclick}>
            <CardTitle tag="h5">{props?.data?.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              $ {props?.data?.price}
            </CardSubtitle>
            <CardText className="text-truncate">
              {props?.data?.description}
            </CardText>
          </div>
          <Button
            onClick={() => clickButton()}
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
