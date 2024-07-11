import { CookiesProvider } from "react-cookie";
import "./App.css";
import Router from "./router/Router";

export default function App() {
  return (
    <div>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <Router />
      </CookiesProvider>
    </div>
  );
}
