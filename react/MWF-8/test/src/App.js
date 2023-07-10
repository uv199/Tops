import "./App.css";

function App() {
  let arr = [1, 2, 3, 4, 5];
  function abc() {
    {
      console.log("test====>called");
    }
  }
  return (
    <div className="App">
      <input type="text" onChange={abc}></input>
      <button>submit</button>
      {/* {arr.map((e) => {
        console.log("test");
        return <h1 onClick={abc}>test</h1>;
      })} */}
    </div>
  );
}

export default App;
