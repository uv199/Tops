import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default ({ data, onCLick }) => {
  console.log("data", data);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
        onClick={() => onCLick(data._id)}
        role="button"
      >
        <img alt="Sample" style={{ height: "150px" }} src={data?.thumbnail} />
        <CardBody>
          <CardTitle className="text-truncate" tag="h5">
            {data?.title} || Missing title
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted " tag="h6">
            $ {data?.price}
          </CardSubtitle>
          <CardText className="text-truncate">{data?.description}</CardText>
          <Button className="w-50 " color="danger">
            Buy
          </Button>
          <Button className="w-50" color="danger">
            Wishlist
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
