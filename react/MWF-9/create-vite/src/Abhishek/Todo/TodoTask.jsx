import React from "react";
import { Table } from "reactstrap";
import "./Todo.css";
import Header from "./Header";
export default function TodoTask() {
  return (
    <div>
      <Header />

      <div className="container">
        <Table className="mt-4 border border-dark">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Task</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </div>
    </div>
  );
}
