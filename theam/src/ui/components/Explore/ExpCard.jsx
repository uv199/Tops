import React from "react";

export default function ExpCard() {
  return (
    <>
      <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a class="product-item" href="cart.html">
          <img src="images/product-1.png" class="img-fluid product-thumbnail" />
          <h3 class="product-title">Nordic Chair</h3>
          <strong class="product-price">$50.00</strong>

          <span class="icon-cross">
            <img src="images/cross.svg" class="img-fluid" />
          </span>
        </a>
      </div>
    </>
  );
}
