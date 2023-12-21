import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

export default function Profile() {
  const [searchParams, setSearchParamas] = useSearchParams();
  console.log("-----------  searchParams----------->", searchParams);

  const data = searchParams.get("name");
  const age = searchParams.get("age");
  console.log("-----------  age----------->", age);
  console.log("-----------  data----------->", data);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Name : {data}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Age : {age} city : surat
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
