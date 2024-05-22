import React, { Component } from "react";
import { Button } from "reactstrap";

let cityArr = [
  {
    state: 1,
    city: "surat",
  },
  {
    state: 1,
    city: "ahemdabad",
  },
  {
    state: 1,
    city: "vadodara",
  },
  {
    state: 2,
    city: "mumbai",
  },
];

export default class LifeCycleMethod extends Component {
  // it will call only first time when componenet render
  // use -> define data member
  constructor() {
    super();
    console.log("-----------  constructor----------->");
    this.state = {
      count: 0,
      state: 0,
      city: cityArr,
    };
  }

  // it will call only first time when component render
  // use -> all api
  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
  }

  // it will call when compoenent update (only when propes and state update)
  // use -> do somthing on behalf of somthing update
  componentDidUpdate(oldProps, oldState) {
    console.log("-----------  componentDidUpdate----------->");
    if (this.state.count === 10) {
      alert("count value is 10");
    }
    let filterData = cityArr.filter((e) => e.state === this.state.state);
    if (this.state.state !== oldState.state) {
      this.setState({ city: filterData });
    }
  }

  // it will call when compoenent update and render
  // use -> return html element
  render() {
    console.log("-----------  render----------->");
    return (
      <div>
        <h1>LifeCycleMethod</h1>
        <h1>Count is {this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc
        </Button>
        <hr />
        <Button className="mr-3" onClick={() => this.setState({ state: 1 })}>
          State-1
        </Button>
        <Button onClick={() => this.setState({ state: 2 })}>State-2</Button>
        <ul>
          {this.state.city.map((e, i) => {
            return (
              <li key={i}>
                {i + 1}.{e.city}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
