import { Component } from "react";
import FunctionCom from "./FunctionCom";

export default class ClassCom extends Component {
  render() {
    return (
      <div className="class_com">
        <hr />
        <h1>class com</h1>
        <FunctionCom />
        <hr />
      </div>
    );
  }
}
