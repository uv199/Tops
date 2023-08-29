import React from "react";
import CardCom from "./CardCom";

let data = [
  {
    img: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "D&G",
    dec: "A good fragrance with good price",
  },
  {
    img: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Unique",
    dec: "A good fragrance with good price",
  },
  {
    img: "https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "D&G",
    dec: "A good fragrance with good price",
  },
  {
    img: "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Queen",
    dec: "A good fragrance with good price",
  },
  {
    img: "https://images.pexels.com/photos/4889551/pexels-photo-4889551.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "OPUS",
    dec: "A good fragrance with good price",
  },
];

export default function MapKeyCom() {
  return (
    <>
      <h1>Buy Your Perfume</h1>
      <div className="d-flex gap-4 flex-wrap">
        {data.map((e, i) => {
          return <CardCom key={i} data={e} />;
        })}

        {/* <CardCom
          img={
            "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          title={"Unique"}
          dec={"A good fragrance with good price"}
        /> */}
      </div>
    </>
  );
}

// export default function MapKeyCom() {
//   return (
//     <div>
//       <h1>MapKeyCom</h1>
//       {[1, 2, 3, 4, 5].map((e, i) => {
//         return <h3 key={i}>hello{e}</h3>;
//       })}
//       {/* <h3>hello1</h3>
//       <h3>hello2</h3>
//       <h3>hello3</h3>
//       <h3>hello4</h3>
//       <h3>hello5</h3> */}
//     </div>
//   );
// }
