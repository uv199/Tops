import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function Card2({ data, redirect }) {
  console.log("-----------  data----------->", data);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img onClick={()=>redirect(data.id)}
          alt="Sample"
          style={{ height: "250px", margin: "10px" }}
          src={data.image}
        />
        <CardBody>
          <CardTitle tag="h5">{data.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {data.price} $
          </CardSubtitle>
          <CardText
            style={{
              maxHeight: "50px",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {data.description}
          </CardText>
          <Button onClick={()=>redirect(data.id)} className="w-100" color="danger">
            Show
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
