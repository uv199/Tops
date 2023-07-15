import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>head</h1>
        <h2>head</h2>
        <h3>head</h3>
        <h4>head</h4>
        <h5>head</h5>
        <h6>head</h6>
      </div>
      
      <p>
        hdskjahk <br /> jdshjbr
      </p>
      <hr />
      <marquee direction="down" height="100" width="200" bgcolor="white">
        Scrolling text
      </marquee>

      <br />
      <label>text</label>
      <label>text</label>
      <input type="text" />
      <br />
      <label>button</label>
      <input type="button" />
      <br />
      <label>color</label>
      <input type="color" />
      <br />
      <label>email</label>
      <input type="email" />
      <input type="checkbox" />
      <input type="radio" />
      <input type="file" />
      <input type="number" />
      <input type="password" />

      <button>click me</button>
      <p></p>

      <table>
        <tr>
          <th>name</th>
          <th>no</th>
        </tr>
        <tr>
          <td>urvish</td>
          <td>100</td>
        </tr>
        <tr>
          <td>test</td>
          <td>100</td>
        </tr>
      </table>

      <form>
        <label htmlFor="name">please enter name</label>
        <input type="text" id="name" />
        <label htmlFor="no">please enter no</label>
        <input type="number" id="no" />
      </form>
    </>
  );
}

export default App;
