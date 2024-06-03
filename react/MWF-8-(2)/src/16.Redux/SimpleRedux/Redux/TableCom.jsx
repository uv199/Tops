import { Trash } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function TableCom() {
  const data = useSelector((store) => store.taskSlice);
  return (
    <div className="w-[500px] border p-2 mt-3">
      <h2 className="text-center">Tasks</h2>
      <hr />
      {data.task.map((e, i) => {
        return (
          <div className="flex justify-between border mb-1 py-1 px-2" key={i}>
            <div className="flex justify-start">
              <p className="!p-0 !m-0">{i + 1}.</p>
              <p className="!p-0 !m-0">{e}</p>
            </div>
            <Trash color="red" size={20} onClick={() => deleteHandler(i)} />
          </div>
        );
      })}
    </div>
  );
}
