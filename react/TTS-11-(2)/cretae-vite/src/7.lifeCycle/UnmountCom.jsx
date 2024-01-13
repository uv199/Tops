import React, { Component } from "react";
import { toast } from "react-toastify";

export default class UnmountCom extends Component {
  componentWillUnmount() {
    alert("-----");
    toast.info("Componenet is removing");
  }
  componentDidMount() {
    toast.success("Componenet is showing");
  }
  render() {
    return <div>UnmountCom</div>;
  }
}
