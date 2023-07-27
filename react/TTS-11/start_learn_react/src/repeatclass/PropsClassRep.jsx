import React, { Component } from "react";

export default class PropsClassRep extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.age}</div>;
  }
}
