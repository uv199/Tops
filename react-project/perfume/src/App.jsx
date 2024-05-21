import "./App.css";
import "react-multi-carousel/lib/styles.css";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
