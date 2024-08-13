import { Button } from "@material-tailwind/react";
import { PlusCircle } from "lucide-react";
import React, { useMemo, useState } from "react";

function ageAfterFive(age) {
  for (let i = 0; i < 1000000000; i++) {}
  console.log("---call----");
  return age + 5;
}

export default function UseMemo() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(23);
  //   let age5 = ageAfterFive(age);

  let age5 = useMemo(() => ageAfterFive(age), [age]);
  
  return (
    <div>
      <h1 className="text-3xl">
        Age is {age} and after 5 years age is {age5}
      </h1>
      <Button onClick={() => setAge(age + 1)}>
        <PlusCircle />
      </Button>

      <hr />

      <h1 className="text-3xl">Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>
        <PlusCircle />
      </Button>
    </div>
  );
}




