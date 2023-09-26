import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection(props) {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>{props?.title}</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                {props.isBtn && (
                  <p>
                    <NavLink to={"/shop"} className="btn btn-secondary me-2">
                      Shop Now
                    </NavLink>
                    <NavLink to="/about" className="btn btn-white-outline">
                      Explore
                    </NavLink>
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
