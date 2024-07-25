import React, { useState } from "react";

export default function CheckBox() {
  let [hobby, setHobby] = useState(["reading","dancing"]);

  const checkHandler = (e, value) => {
    if (e.target.checked) {
      setHobby([...hobby, value]);
    } else {
      let filterData = hobby.filter((e) => e !== value);
      setHobby(filterData);
    }
  };

  return (
    <div className="flex items-center flex-col">
      <h1>hobby : {hobby.join("---")}</h1>
      <div>
        <input
          checked={hobby.includes("reading")}
          type="checkbox"
          onClick={(e) => checkHandler(e, "reading")}
        />
        Reading
        <br />
        <input
          checked={hobby.includes("playFootball")}
          type="checkbox"
          onClick={(e) => checkHandler(e, "playFootball")}
        />
        Play footBall
        <br />
        <input
          checked={hobby.includes("watchMovie")}
          type="checkbox"
          onClick={(e) => checkHandler(e, "watchMovie")}
        />{" "}
        Watch movie
        <br />
        <input
          checked={hobby.includes("dancing")}
          type="checkbox"
          onClick={(e) => checkHandler(e, "dancing")}
        />{" "}
        Dancing
      </div>
    </div>
  );
}


/*
  let [user, setHobby] = useState({hobby: ["reading","dancing"]});

  const checkHandler = (e, value) => {
    if (e.target.checked) {
      console.log("---->add---->");
      setUser({...user,hobby:[...user.hobby, value]});
    } else {
      console.log("---->remove---->");
      let filterData = hobby.filter((e) => e !== value);
      setHobby(filterData);
    }
  };
*/
