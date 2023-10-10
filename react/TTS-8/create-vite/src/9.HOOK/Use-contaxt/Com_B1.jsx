import React from "react";
import Com_B2 from "./Com_B2";
import { CarContext } from "./Usecontaxt";

export default function Com_B1({ name_B1 }) {
  return (
    <>
      <Com_B2 name_B2={name_B1} />
    </>
  );
}

/*
<CarContext.Consumer>
        {(data) => {
          return (
            <>
              <h1> heyy im com _b1 and car name is {data}</h1>
            </>
          );
        }}
      </CarContext.Consumer> */
