import { Button } from "reactstrap";
import HOC from "./HOCcom";

function AmountCom({ num, incFun }) {
    return (
      <div>
        <h1>Amount is {num}</h1>
        <Button onClick={() => incFun(100)}>Inc</Button>
      </div>
    );
  }
  
  export default HOC(AmountCom);
