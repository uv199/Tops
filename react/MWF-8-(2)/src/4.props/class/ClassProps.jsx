import React, { Component } from "react";
import ClassCard from "./ClassCard";

export default class ClassProps extends Component {



  render() {
    return (
      <div>
        ClassProps
        <ClassCard name={"urvish"} age={23} />
        <hr />
        <ClassCard name={"Ajeet"} age={0} />
        <hr />
      </div>
    );
  }
}
