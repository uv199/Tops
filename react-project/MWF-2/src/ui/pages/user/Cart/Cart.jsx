import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.css";

export default function Cart() {
  let { cart } = useSelector((store) => store.cartSlice);
  console.log("-----------  cart----------->", cart);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>
        {cart?.map?.(({ productId, count }, i) => {
          return (
            <div key={i} className="product">
              <div className="product-image">
                <img src={productId.thumbnail} />
              </div>
              <div className="product-details">
                <div className="product-title">{productId.titel}</div>
                <p className="product-description">{productId.description}</p>
              </div>
              <div className="product-price">{productId?.price}</div>
              <div className="product-quantity">
                <input
                  type="number"
                  value={count}
                  onChange={() => {}}
                  min="1"
                />
              </div>
              <div className="product-removal">
                <button className="remove-product">Remove</button>
              </div>
              <div className="product-line-price">{productId?.price}</div>
            </div>
          );
        })}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              71.97
            </div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              3.60
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              15.00
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              90.57
            </div>
          </div>
        </div>

        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}
