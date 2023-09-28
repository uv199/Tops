import React, { Component } from "react";
import { Button } from "reactstrap";
// if(x) // null/undefined/0/false

export default class ClassPro1 extends Component {
  constructor() {
    super();
    this.colorArr = ["red", "black", "green", "yellow", "blue", "brown"];
    this.state = {
      index: 0,
    };
  }
  changeColor() {
    if (this.state.index < this.colorArr.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    } else {
      //   alert("repeat start");
      let x = confirm("do you want to repeat ?");
      if (x) {
        this.setState({
          index: 0,
        });
      }
    }
  }

  render() {
    return (
      <>
        <h1>class pro {this.state.index} </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            backgroundColor: this.colorArr[this?.state?.index],
          }}
        >
          <b>BOX</b>
        </div>
        <Button
          onClick={() => this.changeColor()}
          color="danger"
          className="mt-4"
        >
          Chnage Color
        </Button>
      </>
    );
  }
}
