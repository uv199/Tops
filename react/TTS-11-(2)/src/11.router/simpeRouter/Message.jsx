import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Message() {
  const navigate = useNavigate();
  let data = useParams();
  console.log("-----------  data----------->", data);
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center ">
      <h1>Hello {data.name}</h1>
      <Button onClick={() => navigate(-1)}>
        <ArrowLeft />
      </Button>
    </div>
  );
}
