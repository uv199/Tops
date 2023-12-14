import FunCom2 from "./1.Componenets/FunCom2";
import FunctionalCom from "./1.Componenets/FunctionalCom";

export default function App() {
  let arr = [1, 2, 3, 4, 5, 6];
  let com = arr.map((e) => {
    return <p>no is {e}</p>;
  });
  return (
    <div>
      {/* {com}
      <hr />
      <h1>App componnent</h1>
      <h1>test-2</h1> */}
      {arr.map((e) => {
        return <h1>no is {e}</h1>;
      })}
      <hr />
      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4]?.map?.((e) => {
          return <FunCom2 />;
        })}
      </div>

      {/* <FunCom2 /> */}
      {/* <FunctionalCom /> */}
    </div>
  );
}

// export const sum = () => {
//   console.log("-----------  sum----------->");
// };

// export const sub = () => {
//   console.log("-----------  sub----------->");
// };
