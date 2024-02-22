import React from "react";
import { useNavigate } from "react-router-dom";

export default function Bike() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Bike</h1>
      <li role="button" onClick={() => navigate("sport")}>
        Sports
      </li>
      <hr />
      <li role="button" onClick={() => navigate("Normal")}>
        Normal
      </li>
      <hr />
      <li role="button" onClick={() => navigate("Chopar")}>
        Chopar
      </li>
      <hr />
      <li role="button" onClick={() => navigate("cruise")}>
        cruise
      </li>
    </div>
  );
}
