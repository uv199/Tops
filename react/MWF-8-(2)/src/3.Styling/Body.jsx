import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function Body() {
  return (
    <div className="border border-dark rounded-4 m-4 p-4 w-100 text-danger d-flex align-content-center justify-content-center flex-column ">
      <h1>Body</h1>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button className="w-100" color="danger">
            Buy
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
