import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassChild extends Component {
  constructor() {
    super();
    this.state = {
      name: this?.props?.name,
    };
  }

  componentDidMount() {
    console.log("props", this.props);
    this.setState({ name: this.props.name });
  }
  render() {
    return (
      <div>
        <h1>Good Morning {this?.state?.name}</h1>
        <h3>age : {this.props.age}</h3>
        <Button onClick={() => this.setState({ name: "User" })}>
          Chnage name
        </Button>
      </div>
    );
  }
}
