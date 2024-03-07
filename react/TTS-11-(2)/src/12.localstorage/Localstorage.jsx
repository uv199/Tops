import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function Localstorage() {
  let [item1, setItem1] = useState({});
  let [item2, setItem2] = useState({});
  console.log("-----------  item2----------->", item2);
  console.log("-----------  item1----------->", item1);

  useEffect(() => {
    let data = localStorage.getItem("userTwo");
    if (data) {
      let normalData = JSON.parse(data);
      setItem2(normalData);
    }
  }, []);

  // add data = localstorage.setItem("keyname in string", data in string)
  let setItemOne = () => {
    let user1 = { name: "urvish", age: 23 };
    let dataString = JSON.stringify(user1);
    localStorage.setItem("userOne", dataString);
  };
  // add data = localstorage.setItem("keyname in string", data in string)
  let setItemTwo = () => {
    let user2 = { name: "jayom", age: 23 };
    let dataString = JSON.stringify(user2);
    localStorage.setItem("userTwo", dataString);
  };
  // update data = localstorage.setItem("same key", new data)
  const updateItemOne = () => {
    localStorage.setItem("userOne", "hello world");
  };

  // delete one data = localstorage.removeItem("key name")
  const deleteOne = () => {
    localStorage.removeItem("userOne");
  };

  //   delete all data = localstorage.clear()
  const deleteAll = () => {
    localStorage.clear();
  };

  // get data = localstorage.removeItem("key name")
  const getItem = () => {
    let data = localStorage.getItem("userOne");
    let normalData = JSON.parse(data);
    setItem1(normalData);
  };
  return (
    <div>
      <h1>item1 = My name is {item1.name}</h1>
      <h1>item2 = My name is {item2.name}</h1>
      <div className="d-flex gap-3 mt-5">
        <Button onClick={() => setItemOne()}>setItem-1</Button>
        <Button onClick={() => setItemTwo()}>setItem-2</Button>
        <Button onClick={() => updateItemOne()}>updateItem-1</Button>
        <Button onClick={() => deleteOne()}>deleteItem-1</Button>
        <Button onClick={() => deleteAll()}>deleteItem-all</Button>
        <Button onClick={() => getItem()}>getItem-2</Button>
      </div>
    </div>
  );
}

/*
add data = localstorage.setItem("keyname in string", data in string)
update data = localstorage.setItem("same key", new data)
delete one data = localstorage.removeItem("key name")
delete all data = localstorage.clear()
get data = localstorage.removeItem("key name")
*/
