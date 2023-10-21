import React, { useContext } from "react";
import { SurnameContext, CountContext } from "./UseContaxtCom";
import { Button } from "reactstrap";

export default function Com_B3({ name3 }) {
  const data = useContext(SurnameContext);
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <h1>
        Hello my name is {name3} {data}
      </h1>
      {/* {
        <SurnameContext.Consumer>
          {(data) => {
            return <h1>hello i am {data}</h1>;
          }}
        </SurnameContext.Consumer>
      } */}
      <Button color="danger" onClick={() => setCount(count + 1)}>
        Inc - Count
      </Button>
    </>
  );
}
