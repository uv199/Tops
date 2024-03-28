import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import TableCom from "./TableCom";

export default function CssProject1() {
  let oddColor = "red";
  let evenColor = "green";
  return (
    <div>
      <Header />
      <TableCom />

      <i style={{ fontSize: "30px" }} class="bi bi-airplane-engines"></i>

      <div className="bodyDiv d-flex">
        {[1, 2, 3, 4].map((e) => {
          return (
            <div
              style={{
                height: "100px",
                width: "100px",
                border: "1px solid black",
                margin: "10px",
                // backgroundColor: e % 2 === 1 ? oddColor : evenColor,
                backgroundColor: e % 2 === 1 && oddColor,
              }}
            >
              {e}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
