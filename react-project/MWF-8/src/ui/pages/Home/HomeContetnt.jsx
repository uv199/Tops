import React from "react";
import CardCom from "../../components/CardCom";
import ShoseData from "../../../utils/shose.json";

export default function HomeContetnt() {
  return (
    <>
      <div className=" ms-auto d-flex flex-wrap justify-  ">
        {ShoseData?.map?.((e) => {
          return <CardCom data={e} />;
        })}
      </div>
    </>
  );
}
