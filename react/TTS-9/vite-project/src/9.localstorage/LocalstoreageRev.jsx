import React from "react";
import { Button } from "reactstrap";

export default function LocalstoreageRev() {
  return (
    <>
      <Button
        className="m-2"
        onClick={() => localStorage.setItem("name", "urvish")}
      >
        Add name key
      </Button>
      <Button className="m-2" onClick={() => localStorage.setItem("age", "23")}>
        Add age key
      </Button>

      <Button
        className="m-2"
        onClick={() => {
          localStorage.removeItem("name");
        }}
      >
        Remove Name
      </Button>

      <Button className="m-2" onClick={() => localStorage.clear()}>
        Remove All
      </Button>
    </>
  );
}
