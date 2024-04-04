import { Button } from "reactstrap";
import HOC from "./HOCcom";

function CounterCom({ num, incFun }) {
    console.log("-----------  num, incFun----------->", num, incFun);
    return (
      <div>
        <h1>Count is {num}</h1>
        <Button onClick={() => incFun(10)}>Inc</Button>
      </div>
    );
  }
export default HOC(CounterCom);
