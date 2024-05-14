import { Checkbox, Label } from "flowbite-react";
import { useState } from "react";

export default function CheckBoxInput() {
  let [country, setCountry] = useState([]);

  const checkBoxHandler = (countryName, e) => {
    console.log("-----------  e----------->", e.target.checked);
    if (e.target.checked) {
      setCountry([...country, countryName]);
    } else {
      let filterData = country.filter((e) => e !== countryName);
      setCountry(filterData);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1>{country.join(" ")}</h1>
      <div className="flex max-w-md flex-col gap-4" id="checkbox">
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">Choose your favorite country</legend>
          <div className="flex items-center gap-2">
            <Checkbox
              id="bharat"
              checked={country.includes("bharat")}
              onChange={(e) => checkBoxHandler("bharat", e)}
            />
            <Label htmlFor="bharat">Bharat</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="united-state"
              checked={country.includes("us")}
              onChange={(e) => checkBoxHandler("us", e)}
            />
            <Label htmlFor="united-state">United States</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="germany"
              checked={country.includes("germany")}
              onChange={(e) => checkBoxHandler("germany", e)}
            />
            <Label htmlFor="germany">Germany</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="spain"
              checked={country.includes("spain")}
              onChange={(e) => checkBoxHandler("spain", e)}
            />
            <Label htmlFor="spain">Spain</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="uk"
              checked={country.includes("uk")}
              onChange={(e) => checkBoxHandler("uk", e)}
            />
            <Label htmlFor="uk">United Kingdom</Label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
