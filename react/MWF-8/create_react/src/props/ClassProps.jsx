import React, { Component } from "react";

class ClassProps extends Component {
  constructor(props) {
    super(props);
    console.log(
      "🚀 ~ file: ClassProps.jsx:8 ~ ClassProps ~ constructor ~ this.props:",
      this.props
    );
    // this.props.type = "test";
    this.state = {
      x: this.props.type,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
      </div>
    );
  }
}

export default ClassProps;
