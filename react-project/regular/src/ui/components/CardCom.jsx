import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { ShoppingBag, Heart } from "lucide-react";

export default function CardCom({ data }) {
  return (
    <>
      <Card
        className="m-2"
        style={{
          width: "18rem",
          border: "1px solid lightgray",
          borderRadius: "10px",
          height: "80vh",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
            margin: "5px",
            height: "50vh",
          }}
          alt="Sample"
          src={data?.imageURL}
        />
        <CardBody>
          <CardTitle tag="h5">{data?.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ {data?.price}
          </CardSubtitle>
          {/* <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText> */}
          <div className="d-flex justify-content-around">
            <Button
              className="w-50 m-1"
              style={{ backgroundColor: "lightcyan" }}
            >
              <ShoppingBag color="#8d8686" />
            </Button>
            <Button className="w-50 m-1" style={{ backgroundColor: "" }}>
              <Heart color="#8d8686" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
