import { ToastContainer } from "react-toastify";
import "./App.css";
import Router from "./router/Router";
import { CookiesProvider } from "react-cookie";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Router />;
      <ToastContainer />
    </CookiesProvider>
  );
}

export default App;
