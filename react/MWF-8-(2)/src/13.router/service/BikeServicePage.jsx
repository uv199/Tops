import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function BikeServicePage() {
  const navigate = useNavigate();
  let data = useParams();
  console.log("-----------  data----------->", data);
  return (
    <>
      <h1>BikeServicePage</h1>
      <h2>Bike type is {data.type}</h2>
      <Button color="danger" onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>
    </>
  );
}
