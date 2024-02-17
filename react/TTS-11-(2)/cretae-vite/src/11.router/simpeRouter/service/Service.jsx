import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Service() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Service</h1>
        <div className="w-100 d-flex justify-content-center">
          <Button color="danger" className="w-25 m-4">
            <NavLink to={"/service/bike"}>Bike</NavLink>
          </Button>
          <Button color="danger" className="w-25 m-4">
            <NavLink to={"/service/car"}>Car</NavLink>
          </Button>
        </div>
        <hr />
        <Button onClick={() => navigate("/")} color="danger">
          Go to home page
        </Button>
      </div>
      <Outlet />
    </>
  );
}
