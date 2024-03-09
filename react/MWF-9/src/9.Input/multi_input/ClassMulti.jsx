import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ClassMulti extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      user: { name: "", password: "", email: "" },
    };
  }

  addDataToArr(e) {
    e.preventDefault();
    this.setState({ allData: [...this?.state?.allData, this?.state?.user] });
    this.setState({ user: { name: "", password: "", email: "" } });
  }

  render() {
    return (
      <>
        <div>
          <h1>My Name is {this.state.user.name}</h1>
          <h1>My password is {this.state.user.password}</h1>
          <form
            onSubmit={(e) => this.addDataToArr(e)}
            className="d-flex flex-column gap-2 rounded-3 p-3"
            style={{ backgroundColor: "lightcyan", border: "1px solid black" }}
          >
            <label htmlFor="name">Name</label>
            <input
              value={this?.state?.user?.name}
              className="rounded-2 border-1"
              type="text"
              onChange={(e) =>
                this.setState({
                  user: { ...this?.state?.user, name: e?.target?.value },
                })
              }
            />
            <label htmlFor="name">Password</label>
            <input
              value={this?.state?.user?.password}
              className="rounded-2 border-1"
              type="password"
              onChange={(e) =>
                this.setState({
                  user: { ...this?.state?.user, password: e?.target?.value },
                })
              }
            />
            <label htmlFor="email">Email</label>
            <input
              value={this?.state?.user?.email}
              className="rounded-2 border-1"
              type="text"
              onChange={(e) =>
                this.setState({
                  user: { ...this?.state?.user, email: e?.target?.value },
                })
              }
            />
            <input type="submit" />
          </form>
          <Table>
            <thead>
              <tr>
                <th>SR.</th>
                <th>Name</th>
                <th>Password</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this?.state?.allData?.map?.((e, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{e?.name}</td>
                    <td>{e?.password}</td>
                    <td>{e?.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
