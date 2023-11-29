import { ToastContainer } from "react-toastify";
import Router from "./router/Router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

export default () => (
  <>
    <Router />;
    <ToastContainer />
  </>
);
