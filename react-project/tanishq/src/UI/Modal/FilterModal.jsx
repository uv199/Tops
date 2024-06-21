import { Checkbox, Label, Radio, RangeSlider } from "flowbite-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import ReactSelect from "react-select";

const sizeData = ["1.5", "2", "3", "4"];
const discountData = ["1", "2", "3", "5", "7", "8", "9"];

export default function FilterModal({ isOpen, toggle, filter, setFilter }) {
  const { control, setValue, getValues, handleSubmit, reset } = useForm({
    defaultValues: {
      size: [],
      discount: [],
      gender: "",
      category: [],
      brand: [],
      price: {
        gt: 0,
        lt: 1500000,
      },
    },
  });

  const showfilterData = (data) => {
    console.log("filter data====>", data);
    setFilter({ ...filter, ...data });
    toggle();
  };

  return (
    <div>
      <div
        className={`z-[1] flex-col w-[20rem] overflow-y-auto bg-red-50 h-full justify-center ${
          isOpen ? "" : "hidden"
        }`}
        style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px" }}
      >
        <span className="flex items-center justify-between gap-3 bg-red-200 text-lg px-8 py-3 w-[100%] text-[#832729]">
          Filter
          <IoMdClose className="text-2xl" onClick={toggle} />
        </span>
        <form onSubmit={handleSubmit(showfilterData)}>
          <div className="pb-4">
            <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
              <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Price
              </span>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <>
                    <RangeSlider
                      id="pricevalue"
                      max={1500000}
                      min={0}
                      className="px-9"
                      {...field}
                    />
                  </>
                )}
              />
            </div>

            <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
              <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Jewellery Type
              </span>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    className="px-3"
                    isMulti
                    {...field}
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions.map(
                        (option) => option.value
                      );
                      field.onChange(selectedValues);
                    }}
                    value={field?.value?.map?.((val) => ({
                      value: val,
                      label: val,
                    }))}
                    options={[
                      { value: "24Karat", label: "24Karat" },
                      { value: "wedding", label: "Wedding" },
                      { value: "dimond", label: "Dimond" },
                      { value: "dailyWear", label: "DailyWear" },
                      { value: "18karat", label: "18karat" },
                      { value: "22karat", label: "22karat" },
                      { value: "silver", label: "Silver" },
                      { value: "gold", label: "Gold" },
                      { value: "platinam", label: "Platinam" },
                    ]}
                  />
                )}
              />
            </div>

            <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6 ">
              <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Sale
              </span>
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    className="px-3"
                    {...field}
                    onChange={(selectedOptions) => {
                      setValue("brand", selectedOptions.value);
                    }}
                    value={field?.value?.map?.((val) => ({
                      value: val,
                      label: val,
                    }))}
                    options={[
                      { value: "diwaliSale", label: "DiwaliSale" },
                      { value: "holiSale", label: "HoliSale" },
                      { value: "newArrivals", label: "NewArrivals" },
                    ]}
                  />
                )}
              />
            </div>

            <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
              <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Gender
              </span>
              <div className="flex items-center gap-2 w-full px-9">
                <Radio
                  id="male"
                  value="male"
                  name="gender"
                  onChange={() => setValue("gender", "male")}
                />
                <Label>Male</Label>
                <Radio
                  id="female"
                  value="female"
                  name="gender"
                  onChange={() => setValue("gender", "female")}
                />
                <Label>Female</Label>
                <Radio
                  id="kids"
                  value="kids"
                  name="gender"
                  onChange={() => setValue("gender", "kids")}
                />
                <Label>Kids</Label>
              </div>
            </div>

            <div
              className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-
            pb-6"
            >
              <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Size
              </span>
              {sizeData.map((size) => (
                <div className="flex gap-2 items-center w-full px-9" key={size}>
                  <Checkbox
                    id={size}
                    value={size}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const currentValues = getValues("size");
                      if (checked) {
                        setValue("size", [...currentValues, size]);
                      } else {
                        setValue(
                          "size",
                          currentValues.filter((e) => e !== size)
                        );
                      }
                    }}
                  />
                  <label>{size}</label>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
              <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Discount
              </span>
              {discountData.map((discount) => (
                <div
                  className="flex gap-2 items-center w-full px-9"
                  key={discount}
                >
                  <Checkbox
                    id={discount}
                    value={discount}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const currentValues = getValues("discount");
                      if (checked) {
                        setValue("discount", [...currentValues, discount]);
                      } else {
                        setValue(
                          "discount",
                          currentValues.filter((e) => e !== discount)
                        );
                      }
                    }}
                  />
                  <label>{discount} %</label>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[100%]">
            <button
              type="button"
              className="w-[50%] p-3 text-lg border-[1px] border-[#832729] text-[#832729]"
              onClick={() => {
                reset();
              }}
            >
              Clear All
            </button>
            <button
              type="submit"
              className="w-[50%] p-3 bg-[#832729] text-white text-lg"
            >
              Show Result
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ====================================================================================================================
// import { Checkbox, Label, Radio, RangeSlider } from "flowbite-react";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";
// import ReactSelect from "react-select";

// const sizeData = ["1.5", "2", "3", "4"];
// const discountData = ["1", "2", "3", "5", "7", "8", "9"];

// export default function FilterModal({ isOpen, toggle }) {
//   const { register, setValue, getValues, handleSubmit, reset } = useForm({
//     defaultValues: {
//       size: [],
//       discount: [],
//       gender: "",
//       jewelleryType: [],
//       brand: [],
//       category: [],
//     },
//   });

//   const filterData = (data) => {
//     console.log("filter data====>", data);
//   };

//   return (
//     <div>
//       <div
//         className={`z-[1] flex-col w-[20rem] overflow-y-auto bg-red-50 h-full justify-center ${
//           isOpen ? "" : "hidden"
//         }`}
//         style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px" }}
//       >
//         <span className="flex items-center justify-between gap-3 bg-red-200 text-lg px-8 py-3 w-[100%] text-[#832729]">
//           Filter
//           <IoMdClose className="text-2xl" onClick={toggle} />
//         </span>
//         <form onSubmit={handleSubmit(filterData)}>
//           <div className="pb-4">
//             <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Price
//               </span>
//               <RangeSlider id="default-range" className="px-9" />
//             </div>

//             <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Jewellery Type
//               </span>
//               <ReactSelect
//                 isMulti
//                 className="px-9"
//                 options={[
//                   { value: "24karet", label: "24karet" },
//                   { value: "wedding", label: "Wedding" },
//                   { value: "diamond", label: "Diamond" },
//                   { value: "dailywere", label: "Dailywere" },
//                   { value: "18karet", label: "18karet" },
//                   { value: "22karet", label: "22karet" },
//                   { value: "silver", label: "Silver" },
//                   { value: "gold", label: "Gold" },
//                   { value: "platinam", label: "Platinam" },
//                 ]}
//                 onChange={(selectedOptions) => {
//                   setValue(
//                     "jewelleryType",
//                     selectedOptions.map((option) => option.value)
//                   );
//                 }}
//               />
//             </div>

//             <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Brand
//               </span>
//               <ReactSelect
//                 isMulti
//                 className="px-9"
//                 options={[
//                   { value: "diwalisale", label: "DiwaliSale" },
//                   { value: "holisale", label: "HoliSale" },
//                   { value: "newarrivals", label: "NewArrivals" },
//                 ]}
//                 onChange={(selectedOptions) => {
//                   setValue(
//                     "brand",
//                     selectedOptions.map((option) => option.value)
//                   );
//                 }}
//               />
//             </div>

//             <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Gender
//               </span>
//               <div className="flex items-center gap-2 w-full px-9">
//                 <Radio
//                   id="male"
//                   value="MALE"
//                   name="gender"
//                   {...register("gender")}
//                 />
//                 <Label>Male</Label>
//                 <Radio
//                   id="female"
//                   value="FEMALE"
//                   name="gender"
//                   {...register("gender")}
//                 />
//                 <Label>Female</Label>
//                 <Radio
//                   id="kids"
//                   value="KIDS"
//                   name="gender"
//                   {...register("gender")}
//                 />
//                 <Label>Kids</Label>
//               </div>
//             </div>

//             <div
//               className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-
//             pb-6"
//             >
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Size
//               </span>
//               {sizeData.map((size) => (
//                 <div className="flex gap-2 items-center w-full px-9" key={size}>
//                   <Checkbox
//                     id={size}
//                     value={size}
//                     {...register("size")}
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       const currentValues = getValues("size");
//                       if (checked) {
//                         setValue("size", [...currentValues, size]);
//                       } else {
//                         setValue(
//                           "size",
//                           currentValues.filter((s) => s !== size)
//                         );
//                       }
//                     }}
//                   />
//                   <label>{size}</label>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Category
//               </span>
//               <ReactSelect
//                 isMulti
//                 className="px-9"
//                 options={[
//                   { value: "24karet", label: "24karet" },
//                   { value: "wedding", label: "Wedding" },
//                   { value: "diamond", label: "Diamond" },
//                   { value: "dailywere", label: "Dailywere" },
//                   { value: "18karet", label: "18karet" },
//                   { value: "22karet", label: "22karet" },
//                   { value: "silver", label: "Silver" },
//                   { value: "gold", label: "Gold" },
//                   { value: "platinam", label: "Platinam" },
//                 ]}
//                 onChange={(selectedOptions) => {
//                   setValue(
//                     "category",
//                     selectedOptions.map((option) => option.value)
//                   );
//                 }}
//               />
//             </div>

//             <div className="flex flex-col w-full border-b-[1px] border-[#83272965] pb-6">
//               <span className="flex items-center gap-3 text-lg px-3 py-2 w-[100%] text-[#832729]">
//                 <IoIosArrowForward className="text-xl" />
//                 Discount
//               </span>
//               {discountData.map((discount) => (
//                 <div className="flex gap-2 w-full px-9" key={discount}>
//                   <Checkbox
//                     id={discount}
//                     value={discount}
//                     {...register("discount")}
//                     onChange={(e) => {
//                       const checked = e.target.checked;
//                       const currentValues = getValues("discount");
//                       if (checked) {
//                         setValue("discount", [...currentValues, discount]);
//                       } else {
//                         setValue(
//                           "discount",
//                           currentValues.filter((d) => d !== discount)
//                         );
//                       }
//                     }}
//                   />
//                   <label>{discount} %</label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="w-[100%]">
//             <button
//               type="button"
//               className="w-[50%] p-3 text-lg border-[1px] border-[#832729] text-[#832729]"
//               onClick={() => {
//                 reset();
//               }}
//             >
//               Clear All
//             </button>
//             <button
//               type="submit"
//               className="w-[50%] p-3 bg-[#832729] text-white text-lg"
//             >
//               Show Result
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
