import { Button } from "antd";
import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
export default function CardCom() {
  return (
    <>
      <Card
        className="m-3"
        style={{
          width: "15rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Shose</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            $ 50
          </CardSubtitle>

          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
}
