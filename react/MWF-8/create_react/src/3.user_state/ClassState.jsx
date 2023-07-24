import React, { Component } from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.x = 0;
    this.state = {
      count: 10,
    };
  }

  fun1(params) {
    this.x++;
    console.log(
      "🚀 ~ file: ClassState.jsx:11 ~ ClassState ~ fun1 ~ x:",
      this.x
    );
  }

  fun2(params) {
    console.log("======>", this.state.count);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.x}</h1>
        <button onClick={() => this.fun1()}>count Inc</button>
        <hr />
        <h1>{this.state.count}</h1>
        <button onClick={() => this.fun2()}>count Inc</button>
      </div>
    );
  }
}

export default ClassState;

/*
in class component we will make state in contructur method
like -  
constructor() {
    super();
    // this.state= 10; // its not acceptable must give object or null value
    this.state = {
      count: 10,
    };
  }
-> we must declare super()at top of constructor method
-> we must provide a object or null value to state 
-> we will use state like this - this.state.(keyName) ->  ex. this.state.count => 10
-> we can make only one state we cants use this.state multiple time

we can chnage value of state like this - this.setState({ keyName: 'value' })
- ex. this.setState({count: 50}) => now this.state.count => 50
*/
