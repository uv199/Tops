import './App.css'
import Router from './Router/Router'
import { ToastContainer } from "react-toastify"
import { Button } from "flowbite-react";

export default function App() {

  return (
    <>
      <div>
        <Router />
      </div>
      <ToastContainer />
    </>
  )
}
