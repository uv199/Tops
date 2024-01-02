import React from "react";
import {
  Col,
  FormGroup,
  Input,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";

const color = ["red", "yellow", "green", "black", "white", "pink", "orange"];
const size = [42, 43, 44, 45, 46];
export default function FilterCom({ showOffcanvas, handleCanvas }) {
  return (
    <div>
      <Offcanvas isOpen={showOffcanvas} toggle={handleCanvas}>
        <OffcanvasHeader toggle={handleCanvas}>Filter</OffcanvasHeader>
        <OffcanvasBody>
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <span>
                  <b>0</b>
                </span>
                <span>
                  <b>100000</b>
                </span>
              </div>
              <Input
                // onChange={(e) => console.log("---->", e?.target?.value)}
                min={0}
                max={100000}
                type="range"
              />
            </Col>
            <Col className="col-12 ">
              {color?.map?.((e) => {
                return (
                  <div className="d-flex align-items-center gap-2 px-3">
                    <Input
                      type="checkbox"
                      style={{ backgroundColor: "black", boxShadow: "none" }}
                    />
                    <div
                      style={{
                        display: "inline-block",
                        height: "15px",
                        width: "15px",
                        border: "0.3px solid lightgray",
                        borderRadius: "50%",
                        backgroundColor: e,
                      }}
                    ></div>
                    <span>{e}</span>
                  </div>
                );
              })}
            </Col>
            <Col className="col-12">
              <FormGroup tag="fieldset">
                <span>Radio Buttons</span>
                <FormGroup check>
                  <Input name="radio1" type="radio" /> <Label check>Male</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>Female</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" /> <Label check>Kids</Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col className="col-12 ">
              {size?.map?.((e) => {
                return (
                  <div className="d-flex align-items-center gap-2 px-3">
                    <Input type="checkbox" />

                    <span>{e}</span>
                  </div>
                );
              })}
            </Col>
          </Row>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}
