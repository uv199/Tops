import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { APIinstance } from "../../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

// perfume",
//   "attar",
//   "bodyMist",
//   "bodySpray",
//   "combo",
//   "gift

const catOptions = [
  { label: "Perfume", value: "perfume" },
  { label: "Attar", value: "attar" },
  { label: "BodyMist", value: "bodyMist" },
  { label: "BodySpray", value: "bodySpray" },
  { label: "Gift", value: "gift" },
];

export default function ProductForm() {
  let { register, handleSubmit, setValue, reset } = useForm();
  let [updateMode, setUpdateMode] = useState(false);

  const [cookies] = useCookies(["token"]);

  const productData = useLocation();

  useEffect(() => {
    console.log("-----------  productData----------->", productData);
    if (productData) {
      setUpdateMode(true);
      reset(productData.state);
    }
  }, []);

  const submitHandler = async (data) => {
    try {
      let response = await APIinstance.post("/product/create", data, {
        headers: {
          authorization: "bearer " + cookies.token,
        },
      });
    } catch (err) {}
  };

  const upadteHandler = (data) => {
    console.log("-=-=-=->", data);
  };

  const multiSelect = (selectOptions) => {
    let values = selectOptions?.map((e) => e.value);
    setValue("maincatagory", values);
  };

  return (
    <div className=" max-w-2xl border m-auto mt-10 p-6 border-gray-300 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: "This Field Is Required" })}
            className=" w-full rounded-md "
          />
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Description
          </label>
          <input
            type="text"
            {...register("description", { required: "This Field Is Required" })}
            className=" w-full rounded-md "
          />
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Price
          </label>
          <input
            type="text"
            {...register("price", { required: "This Field Is Required" })}
            className=" w-full rounded-md "
          />
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Discount Prize
          </label>
          <input
            type="text"
            {...register("discountPercentage", {
              required: "This Field Is Required",
            })}
            className=" w-full rounded-md "
          />
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Available Stock
          </label>
          <input
            type="text"
            {...register("aStock", { required: "This Field Is Required" })}
            className=" w-full rounded-md "
          />
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Brand
          </label>
          <input
            type="text"
            {...register("brand", { required: "This Field Is Required" })}
            className=" w-full rounded-md "
          />
        </div>

        {/* <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Catagory
          </label>
          <ReactSelect
            {...register("category", { required: "This Field Is Required" })}
            options={catOptions}
            onChange={(e) => setValue("category", e.value)}
          />
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Main Catagory
          </label>
          <ReactSelect
            isMulti
            {...register("mainCatagory", {
              required: "This Field Is Required",
            })}
            options={catOptions}
            onChange={multiSelect}
          />
        </div> */}

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Gender
          </label>
          <div className=" flex gap-3">
            {["male", "female", "Kids"].map((e, i) => {
              return (
                <div className=" flex items-center gap-1" key={i}>
                  <label htmlFor={`gender${e}`}>{e}</label>
                  <input
                    type="radio"
                    {...register("gender", {
                      required: "This Field Is Required",
                    })}
                    value={e}
                    id={`gender${e}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Gender
          </label>
          <div className=" flex gap-3">
            {["50ml", "100ml", "100ml"].map((e) => {
              return (
                <div className=" flex items-center gap-1">
                  <label htmlFor={`size${e}`}>{e}</label>
                  <input
                    type="checkbox"
                    {...register("size", {
                      required: "This Field Is Required",
                    })}
                    value={e}
                    id={`size${e}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="m-4">
          <label
            htmlFor=""
            className="block text-gray-700 font-bold text-md mb-2"
          >
            Thumbnail
          </label>
          <input
            type="text"
            {...register("thumbnail", { required: "This Field Is Required" })}
            className=" w-full rounded-md "
          />
        </div>
        <div className="flex justify-center m-4">
          {updateMode ? (
            <button
              onClick={handleSubmit(upadteHandler)}
              className="w-[50%] bg-blue-500 p-2  border rounded-md text-xl text-white font-bold "
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              className="w-[50%] bg-blue-500 p-2  border rounded-md text-xl text-white font-bold "
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
