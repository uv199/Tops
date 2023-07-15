import React, { Component } from "react";

class UserSateClass extends Component {
  constructor() {
    super();
    this.state = {
      no: 0,
      name: "my name ",
    };
    // this.x = 20;
  }
  clickme() {
    console.log("----", this.state.no);
    this.setState({ no: this.state.no + 1 });
    this.setState({ name: this.state.name + "nihar" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.no}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.clickme()}>Please click me</button>
      </div>
    );
  }
}

export default UserSateClass;
