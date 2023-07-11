import React from "react";
import ClassCom from "./ClassCom";
import "./body.css";
class Body extends React.Component {
  render() {
    return (
      <div className="body">
        body
        <ClassCom />
        <h1>test-----</h1>
      </div>
    );
  }
}

export default Body;
