import { Label, Radio } from "flowbite-react";
import { useState } from "react";

export default function RadioInput() {
  let [country, setCountry] = useState("");
  return (
    <div className="w-full flex flex-col items-center">
      <h1>Country is {country}</h1>
      <hr />
      <fieldset className="flex max-w-md flex-col gap-4">
        <legend className="mb-4">Choose your favorite country</legend>
        <div className="flex items-center gap-2">
          <Radio
            id="bharat"
            checked={country === "bharat"}
            onChange={() => setCountry("bharat")}
          />
          <Label htmlFor="bharat">Bharat</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="united-state"
            checked={country === "us"}
            onChange={() => setCountry("us")}
          />
          <Label htmlFor="united-state">United States</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="germany"
            checked={country === "germany"}
            onChange={() => setCountry("germany")}
          />
          <Label htmlFor="germany">Germany</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="spain"
            checked={country === "spain"}
            onChange={() => setCountry("spain")}
          />
          <Label htmlFor="spain">Spain</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            id="uk"
            checked={country === "uk"}
            onChange={() => setCountry("uk")}
          />
          <Label htmlFor="uk">United Kingdom</Label>
        </div>
      </fieldset>
    </div>
  );
}
