import React, { useState } from "react";

export default function Project() {
  const [carName, setName] = useState("");
  const [carColour, setColour] = useState("");
  const [carNumber, setNumber] = useState("");

  return (
    <form>
      <input
        value="carName"
        type="text"
        onChange={(e) => setUser(e.target.value)}
        label="name"
      />
      <input
        value="carColour"
        type="text"
        onChange={(e) => setUser(e.target.value)}
        label="colur"
      />
      <input
        value="carnumber"
        type="text"
        onChange={(e) => setUser(e.target.value)}
        label="number"
      />
    </form>
  );
}
