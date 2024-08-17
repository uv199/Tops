import { Button } from "@material-tailwind/react";
import { Plus } from "lucide-react";
import React, { Component } from "react";
import Unmount from "./Unmount";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("-----------  constructor----------->");
  }

  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
  }

  componentDidUpdate() {
    console.log("-----------  componentDidUpdate----------->");
  }
  render() {
    console.log("-----------  render----------->");

    return (
      <div>
        <h1>LifeCycle</h1>
        <h1 className="text-3xl">Count is {this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          <Plus />
        </Button>

        {this.state.count < 5 && <Unmount />}
        {/* {this.state.count < 5 ? <Unmount /> : null} */}
      </div>
    );
  }
}
