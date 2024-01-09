import React, { useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import Select from "react-select";

const color = ["red", "yellow", "green", "black", "white", "pink", "orange"];
const category = [
  { value: "party-wear", label: "Party Wear" },
  { value: "sports", label: "Sports" },
  { value: "casual", label: "Casual" },
  { value: "formal", label: "Formal" },
  { value: "lofer", label: "Lofer" },
  { value: "casual", label: "Casual" },
  { value: "highlength", label: "High-Length" },
];
const size = [42, 43, 44, 45, 46];
export default function FilterCom({
  showOffcanvas,
  handleCanvas,
  allShoseFilter,
  allShoseSetFilter,
}) {
  let [filter, setFilter] = useState(allShoseFilter);

  const sizeCheckBoxHandler = (size) => {
    let match = filter.size.includes(size);
    if (match) {
      let newArray = filter?.size?.filter((e) => e !== size);
      setFilter({ ...filter, size: newArray });
    } else {
      let newSizeArray = [...filter?.size, size];
      setFilter({ ...filter, size: newSizeArray });
    }
  };

  const applyFilter = () => {
    console.log(filter)
    allShoseSetFilter(filter);
  };
  return (
    <div>
      <Offcanvas isOpen={showOffcanvas} toggle={handleCanvas}>
        <OffcanvasHeader toggle={handleCanvas}>Filter</OffcanvasHeader>
        <OffcanvasBody>
          <Button onClick={applyFilter}>applyFilter</Button>
          <Row>
            <Col className="col-12 ">
              <Label>
                <b>Category</b>
              </Label>
              <Select
                onChange={(arrObj) =>
                  setFilter({
                    ...filter,
                    category: arrObj?.map((ele) => ele.value),
                  })
                }
                isMulti={true}
                options={category}
              />
            </Col>
            <Col>
              <Label>
                <b>Price</b>
              </Label>
              <hr className="mb-2 mt-0 w-100" />
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
              <Label>
                <b>Color</b>
              </Label>
              <hr className="my-2 mt-0 w-100" />
              {color?.map?.((e, i) => {
                return (
                  <div key={i} className="d-flex align-items-center gap-2 px-3">
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
              <Label>
                <b>Gender</b>
              </Label>
              <hr className="mb-2 mt-0 w-100" />
              <FormGroup tag="fieldset" className="d-flex gap-2">
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    checked={filter?.gender === "male"}
                    onChange={() => setFilter({ ...filter, gender: "male" })}
                  />
                  <Label check>Male</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    checked={filter?.gender === "female"}
                    onChange={() => setFilter({ ...filter, gender: "female" })}
                  />
                  <Label check>Female</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    checked={filter?.gender === "kids"}
                    onChange={() => setFilter({ ...filter, gender: "kids" })}
                  />
                  <Label check>Kids</Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col className="col-12 d-flex flex-wrap">
              <Label className="w-100">
                <b>Size</b>
              </Label>
              <hr className="my-2 mt-0 w-100" />
              {size?.map?.((e, i) => {
                return (
                  <div
                    key={i}
                    className="d-flex align-items-center gap-2 px-3 w-50"
                  >
                    <Input
                      onChange={() => sizeCheckBoxHandler(e)}
                      type="checkbox"
                      checked={filter?.size?.includes(e)}
                    />
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
