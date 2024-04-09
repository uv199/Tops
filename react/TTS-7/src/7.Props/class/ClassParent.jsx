import React, { Component } from "react";
import ClassChild from "./ClassChild";

export default class ClassParent extends Component {
  constructor() {
    super();
    this.name = "urvish";
    this.age = 23;
  }
  render() {
    return (
      <div>
        <ClassChild age={this.age} name={this.name} />
        <ClassChild age={55} name={"manoj"} />
      </div>
    );
  }
}
