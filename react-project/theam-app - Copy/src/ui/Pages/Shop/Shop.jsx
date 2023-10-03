import React from "react";
import Card from "../../component/card/Card";
import Slide from "../../component/Slider/Slide";
import { Col, Nav, NavItem, NavLink, Row, TabPane } from "reactstrap";

export default function Shop() {
  return (
    <>
      <Slide />

      <div className=" mt-5">
        <Nav tabs>
          <NavItem>
            <NavLink className="" onClick={function noRefCheck() {}}>
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="active" onClick={function noRefCheck() {}}>
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="product-section">
        <div className="m-4">
          <div className="d-flex flex-row flex-wrap gap-5 justify-content-center  ">
            <div className="w-100 d-flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
                return <Card key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
