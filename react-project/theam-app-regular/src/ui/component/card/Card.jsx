import React from "react";

export default function Card({ data, onClickEvent }) {
  
  return (
    <>
      <div
        className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 w-25"
        style={{ maxWidth: "250px" }}
      >
        <a className="product-item">
          <img
            style={{ height: "100px" }}
            src={data?.thumbnail}
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">{data?.title}</h3>
          <strong className="product-price">${data?.price}</strong>

          <span
            className="icon-cross"
            role="button"
            onClick={() => onClickEvent(data?._id)}
          >
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </a>
      </div>
    </>
  );
}
