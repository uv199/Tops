import React from "react";

export default function ProductForm() {
  return (
    <>
      <div>
        <div className="border-2 border-black rounded-xl m-auto p-7 w-80 mt-5">
          <h1 className="text-center font-bold">Add Product From</h1>
          <form action="">
            <div className="grid gap-2">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="border border-black rounded-sm"
              />
              <label htmlFor="">Description</label>
              <input
                type="text"
                className="border border-black"
              />
              <label htmlFor="">Price</label>
              <input
                type="text"
                className="border border-black rounded-sm"
              />
              <label htmlFor="">Discount Percentage</label>
              <input
                type="text"
                className="border border-black rounded-sm"
              />
              <label htmlFor="">Available Stock</label>
              <input
                type="text"
                className="border border-black rounded-sm"
              />
              <label htmlFor="">Brand</label>
              <input
                type="text"
                className="border border-black rounded-sm"
              />
            </div>
            <div className="grid gap-1 pt-2">
              <label htmlFor="">Category</label>
              <select
                name=""
                id=""
                className="border border-black rounded-sm"
              >
                <option value="">Select....</option>
                <option value="">Opetion-1</option>
                <option value="">Opetion-2</option>
                <option value="">Opetion-3</option>
              </select>
            </div>
            <div className="grid gap-1 pt-2">
              <label htmlFor="">Main Category</label>
              <select
                name=""
                id=""
                className="border border-black rounded-sm"
              >
                <option value="">Select a Main Category</option>
                <option value="">Opetion-1</option>
                <option value="">Opetion-2</option>
                <option value="">Opetion-3</option>
              </select>
            </div>
            <div className="grid gap-1 pt-2">
              <label htmlFor="">Gender</label>
              <div className="flex gap-2">
                <input type="radio" />
                Male
                <input type="radio" />
                Female
                <input type="radio" />
                Kids
              </div>
            </div>
            <div className="grid gap-1 pt-2 pb-2">
              <label htmlFor="">Size</label>
              <div className="flex gap-2">
                <input type="checkbox" />
                50ml
                <input type="checkbox" />
                100ml
                <input type="checkbox" />
                150ml
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="">Thumbnails</label>
              <input
                type="text"
                className="border border-black rounded-sm"
              />
            </div>
            <div className="text-center pt-3">
              <button className="bg-light-blue-900 px-10 py-1 w-48 text-white hover:border-2 border-black rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
