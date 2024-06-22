import React, { useState } from "react";
import "./index.css";

export default function Cart() {
  const [itemCount, setItemCount] = useState(1);
  const originalPrice = 799;
  const discountedPrice = 249;
  const freeShippingThreshold = 1000; // Example threshold for free shipping
  const remainingForFreeShipping =
    freeShippingThreshold - itemCount * discountedPrice;

  const incrementItem = () => setItemCount(itemCount + 1);
  const decrementItem = () => setItemCount(itemCount > 1 ? itemCount - 1 : 1);

  const savings = itemCount * (originalPrice - discountedPrice);
  const subtotal = itemCount * discountedPrice;

  const progressPercentage = Math.min(
    (subtotal / freeShippingThreshold) * 100,
    100
  );

  return (
    <div className={"mainDiv"}>
      <h2 className="text-center text-3xl">Your Cart</h2>
      <div className="mb-10 mt-5">
        <p>
          Add Rs.{" "}
          {remainingForFreeShipping > 0
            ? remainingForFreeShipping.toFixed(2)
            : 0}{" "}
          to get free shipping
        </p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <img
          src="https://www.houseofem5.com/cdn/shop/files/WoodyOud_05d51f0f-ce13-4c6d-8f83-5b2c287cea54_800x.jpg?v=1718028653"
          alt="Product"
          className="product-image"
        />
        <div className="flex-1">
          <p>EM5™ Woody Oud | Solid Perfume for Men & Women</p>
          <p>
            <s>Rs. {originalPrice}</s>{" "}
            <span className="text-red-600">Rs. {discountedPrice}</span>
          </p>
        </div>
        <div className="item-controls">
          <button onClick={() => decrementItem()}>-</button>
          <span>{itemCount}</span>
          <button onClick={() => incrementItem()}>+</button>
        </div>
      </div>

      <div className="mb-5">
        <p className="order-message">
          Order before your items are out of stock!
        </p>
        <p>Savings: -Rs. {savings}</p>
        <p>Subtotal: Rs. {subtotal}</p>
      </div>

      <button className="checkout-btn">Checkout</button>
      <p className="secure-checkout">Guaranteed Safe & Secure Checkout</p>
      <button className="continue-shopping">Continue shopping</button>
    </div>
  );
}
