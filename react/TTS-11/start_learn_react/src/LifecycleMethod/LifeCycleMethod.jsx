import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Unmount from "./Unmount";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    console.log("--------constructor--------");
    this.state = {
      no: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("--------componentDidUpdate--------", prevState, this.state.no);
    if (this.state.no > 10) {
      let x = confirm("You want to continue");
      !x ? this.setState({ no: 0 }) : null;
    }
  }

  componentDidMount() {
    console.log("--------componentDidMount--------");
  }

  clickMe() {
    this.setState({ no: this.state.no + 1 });
  }
  render() {
    console.log("--------render--------");
    return (
      <>
        <h1>hello methods</h1>
        <h1>{this.state.no}</h1>

        {this.state.no < 5 ? <Unmount /> : null}

        <Button
          className="mt-2 me-3"
          onClick={() => this.clickMe()}
          variant="primary"
        >
          Add
        </Button>
      </>
    );
  }
}
