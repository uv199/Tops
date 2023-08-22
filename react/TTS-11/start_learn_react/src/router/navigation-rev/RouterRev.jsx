import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import "./index.css";

export default function RouterRev() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ width: "400px" }}
        className="d-flex justify-content-between"
      >
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to="/service">Service</Link> */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to="/service">Service</NavLink>
      </div>
      <button onClick={() => navigate("/")}>go to home</button>
      <button onClick={() => navigate(-1)}>go to back</button>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Error-Page-404</h1>} />
      </Routes>
    </>
  );
}
