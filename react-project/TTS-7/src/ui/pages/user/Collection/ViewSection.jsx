import { Grip, LayoutGrid } from "lucide-react";
import React from "react";

export default function ViewSection() {
  const options = [
    { value: "best selling", label: "Best" },
    { value: "employee", label: "Employee" },
    { value: "user", label: "User" },
  ];

  return (
    <>
      <div className="Main">
        <section>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="Viewsec">
              <div className="">
                <p>View as </p>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <div>
                  <Grip />
                </div>
                <div>
                  <LayoutGrid />
                </div>
              </div>
            </div>
            <div className="ProductCount">
              <p>91 Products</p>
            </div>
            <div className="SortSec">
              <div>
                <form className="max-w-sm mx-auto">
                  <label
                    htmlFor="small"
                    className=" text-sm font-medium text-gray-900 dark:text-white"
                  >
                    SORT BY
                  </label>
                  <select
                    id="small"
                    className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    style={{ padding: "13px", fontSize: "19px" }}
                  >
                    <option selected>Best Selling</option>
                    <option value="Manual">Manual</option>
                    <option value="Titile asceding">Titile asceding</option>
                    <option value="Titile desceding">Titile desceding</option>
                    <option value="Price asceding">Price asceding</option>
                    <option value="Price desceding">Price desceding</option>
                    <option value="Created asceding">Created asceding</option>
                    <option value="Created desceding">Created desceding</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
