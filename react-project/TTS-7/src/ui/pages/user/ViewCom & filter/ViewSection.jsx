import { ChevronRight, Grip, LayoutGrid } from "lucide-react";
import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";

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
        <div>
              <img src="https://www.houseofem5.com/cdn/shop/collections/Perfume_Sprays.png?v=1707398901" alt="" />
         </div>
         <div className="backsection flex p-3" style={{backgroundColor:"#f1f1f1"}}>
          <div className="home flex align-items-center">
            <p>Home</p>
            <ChevronRight className="h-4 " />
            
          </div>
          <div className="solid perfume">
           <p>Solid Perfume </p>
          </div>
        </div>
          <div className="pt-2" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            
            <div className="Viewsec" >

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
                <form class="max-w-sm mx-auto" >
                  <div className="flex align-items-center">
                  <label
                    for="small"
                    class=" text-sm flex-1 p-2"
                  >
                   SORT BY 
                  </label>
                  <select 
                    id="small"
                    class="block p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    style={{padding:"13px",fontSize:"19px"}}
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
