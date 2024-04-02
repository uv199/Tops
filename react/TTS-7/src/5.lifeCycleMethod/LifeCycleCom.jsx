import axios from "axios";
import React, { Component } from "react";
import { Button } from "reactstrap";

export default class LifeCycleCom extends Component {
  constructor() {
    super();
    console.log("-----------  constructor----------->");
    this.state = { count: 1, productData: {} };
  }

  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${this.state.count}`,
    }).then((res) => {
      this.setState({ productData: res.data });
    });
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("-----------  componentDidUpdate----------->");
    if (oldState.count !== this.state.count && this.state.count % 5 === 0) {
      axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${this.state.count}`,
      }).then((res) => {
        this.setState({ productData: res.data });
      });
    }
  }
  render() {
    console.log("-----------  render----------->");
    return (
      <div>
        <h1>LifeCycleCom</h1>
        <h2>Count is {this.state.count}</h2>
        <Button
          color="danger"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Inc
        </Button>

        <hr />
        <h4>{this.state.productData.title}</h4>
        <img src={this.state.productData.image} style={{ height: "100px" }} />
      </div>
    );
  }
}
