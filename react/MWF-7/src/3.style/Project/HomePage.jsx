import { ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "reactstrap";
import "./index.css"

export default function HomePage() {
  return (
    <div>
      <div className="mainDiv">
        <ShoppingCart className="icon" />
        <div className="roundDiv">3</div>
      </div>
    </div>
  );
}
