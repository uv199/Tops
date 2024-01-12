import React, { Component } from "react";
import { Button } from "reactstrap";

export default class LifeCycleCom extends Component {
  constructor() {
    super();
    console.log("---------CONSTRUCTOR-----------");
    this.count = 100;
    this.state = {
      amount: 1900,
      point: 0,
    };
  }

  componentDidMount() {
    this.count2 = 999;
    console.log("---------COMPONENTDIDMOUNT-----------");
    setTimeout(() => {
      alert("please login");
    }, 5000);
    // api call - socket connection
  }

  componentDidUpdate(oldProps, oldState) {
    // console.log("-----------  oldProps----------->", oldProps);
    // console.log("-----------  oldState----------->", oldState);

    if (this.state.amount - oldState.amount === 5) {
      alert("State is Update by 5");
      this.setState({ point: this.state.point + 1 });
    }
    console.log("---------COMPONENTDIDUPDATE-----------");
  }

  render() {
    console.log("---------RENDER-----------");
    return (
      <>
        <h1>LifeCycleCom</h1>
        <h2>Count is {this.count}</h2>
        <h2>Count-2 is {this.count2}</h2>
        <hr />
        <h2>Amount is {this.state.amount}</h2>
        <h2>Point is {this.state.point}</h2>

        <Button
          color="danger"
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          Inc Amount
        </Button>
        <Button
          className="ms-2"
          color="danger"
          onClick={() => this.setState({ amount: this.state.amount + 5 })}
        >
          Inc-5 Amount
        </Button>
      </>
    );
  }
}
