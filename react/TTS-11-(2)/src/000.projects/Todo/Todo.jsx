import React, { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [pendingTask, setPendingTask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  
  return <div>Todo</div>;
}
