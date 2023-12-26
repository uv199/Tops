import ClassCom from "./2.Componenet/class/ClassCom";
import FunctionalCom from "./2.Componenet/functional/FunctionalCom";
import FunctionalCom2 from "./2.Componenet/functional/FunctionalCom2";

function App() {
  return (
    <div>
      {/* <----------------------COMPONENT-----------------------> */}
      <FunctionalCom2 />
      <ClassCom />
      <FunctionalCom />
    </div>
  );
}

export default App;
