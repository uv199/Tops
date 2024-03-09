import React, { Component } from "react";

export default class ClassPro extends Component {
  render() {
    console.log(":---------->", this.props);
    return (
      <>
        <h1>Hello world</h1>
        <h1>My name is {this?.props?.data?.name}</h1>
        <h1>My age is {this?.props?.data?.age}</h1>
      </>
    );
  }
}
