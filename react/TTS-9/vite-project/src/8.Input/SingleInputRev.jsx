import React, { useState } from "react";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

export default function SingleInputRev() {
  let [city, setCity] = useState("");
  let [allCity, setAllCity] = useState([]);

  const getData = (eleData) => {
    setCity(eleData?.target?.value);
  };
  const addData = () => {
    // console.log("city--->", city.length);
    if (city.length > 0) {
      setAllCity([...allCity, city]);
      setCity("");
      toast.success("City name Added");
    } else {
      toast.error("Please fill the input");
    }
    // allCity = []
    // allCity = [...allcity,"mno"]
    // allCity = ["xyz","mno"]
  };

  return (
    <>
      <h1>{city}</h1>
      <input
        value={city}
        type="text"
        onChange={(e) => setCity(e?.target?.value)}
      />
      {/* <input value={city} type="text" onChange={(e) => getData(e)} /> */}
      <Button onClick={addData}>Add City Name</Button>

      <div>
        {allCity.map((e, i) => {
          return (
            <h1 className="border border-dark" key={i}>
              {e}
            </h1>
          );
        })}
      </div>
    </>
  );
}
