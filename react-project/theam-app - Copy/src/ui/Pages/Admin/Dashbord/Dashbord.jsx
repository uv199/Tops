// Packages
import { GanttChartSquare } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

// Files
import "./index.css";

export default function Dashbord() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => setIsOpen(!isOpen);
  return (
    <>
      <h1>Dashbord</h1>
      <div>
        <Button color="primary" onClick={isOpenHandler}>
          Open
        </Button>
        <Offcanvas isOpen={isOpen} toggle={isOpenHandler}>
          <OffcanvasHeader toggle={isOpenHandler}>FURNI.</OffcanvasHeader>
          <OffcanvasBody>
            <NavLink className="d-flex align-items-center" to={"/products"}>
              <GanttChartSquare /> <h4 className="ms-3">Products</h4>
            </NavLink>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  );
}
