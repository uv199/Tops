import React, { Component } from "react";

export default class ClassCard extends Component {
  render() {
    return (
      <div>
        <h1>
          my name is {this?.props?.name}. and i'm
           {this?.props?.age || " not mention"} year old..
        </h1>
      </div>
    );
  }
}
