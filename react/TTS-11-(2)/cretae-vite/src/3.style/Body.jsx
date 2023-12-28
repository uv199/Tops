import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default class Body extends Component {
  render() {
    return (
      <div className="w-100 text-bg-dark border border-danger d-flex flex-column  align-items-center  justify-content-center p-4 gap-3">
        <h1>hello world</h1>
        <Button className="w-25" color="primary">
          Click Me
        </Button>
        <Card
          style={{
            width: "18rem",
            borderRadius:"10PX"
          }}
        >
          <img style={{borderRadius:"10px 10px 0 0"}} alt="Sample" src="https://picsum.photos/300/200" />
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
              Button
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
