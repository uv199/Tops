import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer id="footer">
        <div class="foot-col-1">
          <div class="logo">
            <a href="#">
              <img src="https//www.sofitmobile.com/images/sofit-icon.png" />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no
            quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum
            no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id
            cum no quo.
          </p>
        </div>

        <div class="foot-col-2">
          <h4>Navigation</h4>
          <p role="button" onClick={() => navigate("/")}>
            Home
          </p>
          <p role="button" onClick={() => navigate("/service")}>
            Service
          </p>
          <p role="button" onClick={() => navigate("/contactus")}>
            Contact-Us
          </p>
          <p role="button" onClick={() => navigate("/product")}>
            Product
          </p>
        </div>

        <div class="foot-col-4">
          <h4>Info</h4>
          <p>
            Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex commodo consequat. Autem vel
            hendrerit iriure dolor in hendrerit.
          </p>
        </div>
      </footer>
    </div>
  );
}
