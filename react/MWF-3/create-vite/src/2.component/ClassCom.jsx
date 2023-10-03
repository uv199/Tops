import React, { Component } from "react";
import FunCom from "./FunCom";

// class ClassCom extends React.Component {}
class ClassCom extends Component {
  render() {
    return (
      <div>
        <h1>hello world - ClassCom</h1>
        <FunCom />
      </div>
    );
  }
}

export default ClassCom;
