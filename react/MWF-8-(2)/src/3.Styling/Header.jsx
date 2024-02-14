import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "darkgray",
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Header</h1>
      </div>
    );
  }
}
