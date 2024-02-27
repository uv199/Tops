import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ConditionalRender() {
  let [user, setUser] = useState("boy");
  return (
    <div>
      {user === "boy" ? <h1>Hello boys</h1> : <h1>Hello girls</h1>}

      {/* {user === "boy" ? <h1>Boys are handsome</h1> : null} */}

      {user === "boy" && <h1>Boys are handsome</h1>}

      <Button onClick={() => setUser("boy")}>Boy</Button>
      <Button onClick={() => setUser("girl")}>Girl</Button>
    </div>
  );
}
