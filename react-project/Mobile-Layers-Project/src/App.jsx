import { ToastContainer } from "react-toastify";
import './App.css'
import Router from "./Router/Router";

function App() {
  return (
    <>
      <div>
        <Router />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
