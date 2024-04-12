import React, { useEffect } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { fetchCart } from "../../../Redux/Fetures/cart/cart";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

export default function OffCanvas({ isOpen, toggleOffCanves }) {
  const dispatch = useDispatch();
  const { error, cart, pending } = useSelector((store) => store.cartSlice);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  return (
    <>
      {pending ? (
        <h1>loading</h1>
      ) : (
        <div>
          <Offcanvas
            isOpen={isOpen}
            toggle={toggleOffCanves}
            direction="end"
            backdrop="static"
            style={{ width: "100%" }}
          >
            <marquee
              style={{
                backgroundColor: "#e7e7e7",
                height: "30px",
                color: "black",
              }}
            >
              Great choice! Add 2 or more products for bundle discounts. No
              coupon required
            </marquee>
            <OffcanvasHeader
              toggle={toggleOffCanves}
              style={{
                fontWeight: "400",
                padding: "0px",
                height: "50px",
                margin: "auto",
                width: "92%",
                borderBottom: "2px solid #00000014",
              }}
            >
              Cart
            </OffcanvasHeader>
            <OffcanvasBody
              style={{
                margin: "36px",
                padding: "30px",
              }}
            >
              <h1 className="mb-4">Shopping Cart</h1>

              <div class="shopping-cart">
                <div class="column-labels">
                  <label class="product-image">Image</label>
                  <label class="product-details">Product</label>
                  <label class="product-price">Price</label>
                  <label class="product-quantity">Quantity</label>
                  <label class="product-removal">Remove</label>
                  <label class="product-line-price">Total</label>
                </div>
                {cart.map((e) => {
                  return (
                    <div class="product">
                      <div class="product-image">
                        <img src={e?.productId?.thumbnail} />
                      </div>
                      <div class="product-details">
                        <div class="product-title">{e?.productId?.title}</div>
                        <p class="product-description">
                          {e?.productId?.description}
                        </p>
                      </div>
                      <div class="product-price"> {e?.productId?.price}</div>
                      <div class="product-quantity">
                        <input type="number" value={e?.count} min="1" />
                      </div>
                      <div class="product-removal">
                        <button class="remove-product">Remove</button>
                      </div>
                      <div class="product-line-price">
                        {e?.productId?.price * e?.count}
                      </div>
                    </div>
                  );
                })}

                <div class="totals">
                  <div class="totals-item">
                    <label>Subtotal</label>
                    <div class="totals-value" id="cart-subtotal">
                      71.97
                    </div>
                  </div>
                  <div class="totals-item">
                    <label>Tax (5%)</label>
                    <div class="totals-value" id="cart-tax">
                      3.60
                    </div>
                  </div>
                  <div class="totals-item">
                    <label>Shipping</label>
                    <div class="totals-value" id="cart-shipping">
                      15.00
                    </div>
                  </div>
                  <div class="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div class="totals-value" id="cart-total">
                      90.57
                    </div>
                  </div>
                </div>

                <button class="checkout">Checkout</button>
              </div>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      )}
    </>
  );
}
