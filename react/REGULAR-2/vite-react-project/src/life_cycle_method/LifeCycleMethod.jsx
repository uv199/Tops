import React, { Component } from "react";

class LifeCycleMethod extends Component {
  componentWillMount() {
    console.log("componentWillMount=>");
  }
  componentDidMount() {
    console.log("componentDidMount=>");
  }
  render() {
    console.log("render=>");
    return <div>Data</div>;
  }
}

export default LifeCycleMethod;
