import React, { Component } from "react";

export default class ClassChild extends Component {
  render() {
    return (
      <div>
        <h1>Good Morning {this.props.name}</h1>
        <h3>age : {this.props.age}</h3>
      </div>
    );
  }
}
