import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import Select from "react-select";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${BE_URL}/product/getproductById/${id}`)
      .then((resData) => {
        setData(resData.data.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  style={{
                    maxWidth: " 100%",
                    maxHeight: " 100vh",
                    margin: " auto",
                  }}
                  className="rounded-4 fit"
                  src={data?.thumbnail}
                />
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h2 className="title text-dark">{data?.title}</h2>
                <h4 className="title text-dark">{data?.description}</h4>
                <div className="mb-3">
                  <span className="h5">$ {data?.price}</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired
                  collection that continues to break away from the conventions
                  of mainstream fashion. Made in Italy, these black and brown
                  clothing low-top shirts for men.
                </p>
                {/* ["shose","casual"]=>"shose-casual" */}
                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{data?.category?.join?.(" - ")}</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">
                    <div className="d-flex gap-2">
                      {data?.color?.map?.((e) => {
                        return (
                          <div
                            style={{
                              backgroundColor: e,
                              height: "15px",
                              width: "15px",
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </dd>
                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">{data?.brand}</dd>

                  <hr />

                  <div className="row mb-4">
                    <div className="col-md-4 col-6">
                      <label className="mb-2">Size</label>
                      <Select
                        options={data?.size?.map?.((e) => {
                          return { value: e, label: e };
                        })}
                      />
                    </div>

                    <div className="col-md-4 col-6 mb-3">
                      <label className="mb-2 d-block">Quantity</label>
                      <div
                        className="input-group mb-3"
                        style={{ width: "170px" }}
                      >
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon1"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control text-center border border-secondary"
                          placeholder="14"
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon2"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-warning shadow-0">
                    Buy now
                  </a>
                  <a href="#" className="btn btn-primary shadow-0">
                    <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  >
                    <i className="me-1 fa fa-heart fa-lg"></i> Save
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
