import React, { Component } from "react";

export default class UpdateComCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    {
      console.log("========constructor========>");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps, prevState:", prevProps, prevState);
    // Check if the props value has changed
    if (this.props.name !== prevProps.name) {
      // Update the state with the new props value
      this.setState({ name: this.props.name });
    }
  }
  render() {
    {
      console.log("========render========>");
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
