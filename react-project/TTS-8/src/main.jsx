import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import FileUploaderMultiple from "./FileUploaderMultiple.jsx";
import ComA from "../revise/propesLifting/ComA.jsx";
import ChildHoc from "../concepts/HOC/ChildHoc.jsx";
import ChildHoc2 from "../concepts/HOC/ChildHoc2.jsx";
import LazyLoad from "../revise/lazy/LazyLoad.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <FileUploaderMultiple /> */}
    {/* <ComA /> */}
    {/* <ChildHoc /> */}
    {/* <ChildHoc2 /> */}
    {/* <LazyLoad /> */}
  </React.StrictMode>
);
