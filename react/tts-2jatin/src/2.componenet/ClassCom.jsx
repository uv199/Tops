import { Component } from "react";
import FunctionCom from "./FunctionCom";

export default class ClassCom extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>Class Com</h1>
        <FunctionCom />
        <hr />
      </div>
    );
  }
}
