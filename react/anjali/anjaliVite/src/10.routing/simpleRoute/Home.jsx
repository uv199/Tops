import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => navigate("/about")}>about</Button>
      <ul className="ul_link">
        <li role="button" onClick={() => navigate("/contact/urvish")}>
          contact to urvish
        </li>
        <li role="button" onClick={() => navigate("/contact/anjali")}>
          contact to anjali
        </li>
        <li role="button" onClick={() => navigate("/contact/chetan")}>
          contact to chetan
        </li>
      </ul>
    </>
  );
}
