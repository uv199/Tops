import "./App.css";
import "react-multi-carousel/lib/styles.css";
import Router from "./router/Router";
import AppRedux from "./Redux/AppRedux";

function App() {
  return (
    <div>
      <Router />
      <AppRedux />
    </div>
  );
}

export default App;
