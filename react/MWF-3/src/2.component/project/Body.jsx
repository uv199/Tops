import React, { Component } from "react";
import "./index.css";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        {["head-1", "head-2", "head-3"].map((e) => {
          return (
            <div className="subContainer">
              <h1>{e}</h1>
            </div>
          );
        })}

        {/* <div className="subContainer">
          <h1>head 2</h1>
        </div>
        <div className="subContainer">
          <h1>head 3</h1>
        </div> */}
      </div>
    );
  }
}
