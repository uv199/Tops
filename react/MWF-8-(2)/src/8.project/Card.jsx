import React from "react";
import {
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Card as StrapCard,
} from "reactstrap";

export default function Card({ details }) {
  return (
    <div>
      <StrapCard
        // style={{
        //   width: "18rem",
        // }}
      >
        {/* <img alt="Sample" src="https://picsum.photos/300/200" /> */}
        <CardBody>
          <CardTitle tag="h5">{details?.city}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {details?.state_name}
          </CardSubtitle>
          <CardText>
            <h1>{details?.population}</h1>
          </CardText>
        </CardBody>
      </StrapCard>
    </div>
  );
}
