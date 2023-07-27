import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    console.log("constructor---->");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component has been mounted.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated:", prevState.count, "->", this.state.count);
  }

  componentWillUnmount() {
    console.log("Component will unmount.");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("render---->");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleMethods;
