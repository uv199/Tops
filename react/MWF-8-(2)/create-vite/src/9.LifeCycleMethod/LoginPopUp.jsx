import React, { Component } from "react";
import { Button } from "reactstrap";
import Unmount from "./Unmount";

export default class LoginPopUp extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      id: "",
      isLogin: false,
    };
  }

  componentDidMount() {
    let id = setInterval(() => {
      alert("Hello please login");
    }, 5000);
    this.setState({ id: id });
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.state.amount - oldState.amount === 5) {
      clearInterval(this.state.id);
      this.setState({ isLogin: true });
    }
  }

  render() {
    return (
      <>
        {!this.state.isLogin && <Unmount />}
        <h2>Amount is {this.state.amount}</h2>

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
