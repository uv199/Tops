import React, { Component } from "react";

class PropsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.state.age}</h1>
      </div>
    );
  }
}

export default PropsClass;
