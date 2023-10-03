import React from "react";

export default function Card() {
  return (
    <>
      <div
        className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 w-25"
        style={{ maxWidth: "250px" }}
      >
        <a className="product-item" href="cart.html">
          <img
            src="images/product-1.png"
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">Nordic Chair</h3>
          <strong className="product-price">$50.00</strong>

          <span className="icon-cross">
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </a>
      </div>
    </>
  );
}
