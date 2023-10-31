import React, { useId } from "react";

export default function MapKey() {
  let nameArr = ["urvish", "nimesh", "meet", "test"];
  console.log("---=-=-=-=>");
  return (
    <>
      <div>
        <h1>MapKey</h1>
        {nameArr.map((e, i) => {
          let id = useId();
        //   console.log("------>");
        //   console.log("id", id);
          return (
            <div key={id}>
              <h1>
                {i + 1}. {e}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
