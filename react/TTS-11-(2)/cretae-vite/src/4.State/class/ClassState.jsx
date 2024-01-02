import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassState extends Component {
  constructor() {
    super();
    // this.state = 100 // ->  ClassState.state: must be set to an object or null
    this.state = {
      count: 99,
    };
  }

  incCount() {
    // this.setState(90); // only allowed object
    this.setState({ count: this?.state?.count + 1 }); // only allowed object
  }
  render() {
    return (
      <div>
        <h1>count is {this?.state?.count}</h1>
        <Button onClick={() => this.incCount()}>Inc</Button>
      </div>
    );
  }
}
