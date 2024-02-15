import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log("--------->", this.props);
    return (
      <>
        <h1>Hello, {this?.props?.data?.name}</h1>
        <h2>{this?.props?.data?.greeting}</h2>
      </>
    );
  }
}

// let props1 = {
//   data: {
//     name: "urvish",
//   },
// };

// props1.data.name;

// let props2 = {};

// props2.data.name;
