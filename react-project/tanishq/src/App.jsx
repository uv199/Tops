import { ToastContainer } from "react-toastify";
import "./App.css";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./Redux/app";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
