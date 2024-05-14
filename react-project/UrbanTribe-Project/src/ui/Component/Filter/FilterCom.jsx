import React, { useState } from "react";
import { Checkbox, Radio } from "flowbite-react";
import { Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { AiFillCheckCircle } from "react-icons/ai";

const categoriesOptions = ["rainProof", "leather", "laptop"];
const colorsOptions = [
  { value: "Red", label: "red" },
  { value: "Blue", label: "blue" },
  { value: "Green", label: "green" },
  { value: "Yellow", label: "yellow" },
  { value: "Gray", label: "gray" },
  { value: "Black", label: "black" },
  { value: "Orange", label: "orange" },
  { value: "Rust", label: "rust" },
  { value: "Brown", label: "brown" },
  { value: "White", label: "white" },
];
const discountRangesOptions = [
  { lable: "0% To 20%", value: { gt: 0, lt: 20 } },
  { lable: "21% To 40%", value: { gt: 21, lt: 40 } },
  { lable: "41% To 60%", value: { gt: 41, lt: 60 } },
  { lable: "61% To 80%", value: { gt: 61, lt: 80 } },
  { lable: "81% To 100%", value: { gt: 81, lt: 100 } },
];
const priceRangesOptions = [
  "Rs. 200 To Rs. 1500",
  "Rs. 1500 To Rs. 3000",
  "Rs. 3000 To Rs. 4500",
  "Rs. 4500 To Rs. 6000",
  "Rs. 6000 To Rs. 7500",
  "Rs. 7500 To Rs. 9000",
];

export default function FilterCom({ modal, toggle, setFilter, filter }) {
  let [input, setInput] = useState(filter);

  const filterHandler = () => {
    console.log("--->", input);
    setFilter({ ...filter, ...input });
  };

  const categoryCheckBoxHandler = (value, checked) => {
    if (checked) {
      setInput({ ...input, category: [...input?.category, value] });
    } else {
      const data = input?.category?.filter((e) => e !== value);
      setInput({ ...input, category: data });
    }
  };
  const colorCheckBoxHandler = (value, checked) => {
    if (checked) {
      setInput({ ...input, color: [...input?.color, value] });
    } else {
      const data = input?.color?.filter((e) => e !== value);
      setInput({ ...input, color: data });
    }
  };
  return (
    <div>
      <Offcanvas
        isOpen={modal}
        toggle={toggle}
        direction="start"
        backdrop="static"
      >
        <marquee className="text-black bg-[#e7e7e7] h-[60px]">
          Great choice! Add 2 or more products for bundle discounts. No coupon
          required
        </marquee>
        <OffcanvasHeader
          toggle={toggle}
          style={{
            fontWeight: "400",
            padding: "10px 0px",
            height: "50px",
            margin: "auto",
            width: "92%",
            borderBottom: "2px solid #00000014",
          }}
        >
          Filters
        </OffcanvasHeader>
        <OffcanvasBody>
          {/* Render Categories */}
          <div>
            <strong className="font-semibold">CATEGORIES</strong>
            <div className="flex gap-2 flex-col [&_label]:m-0 [&_label]:ms-4 mt-3 border-b-2 pb-6 border-[#00000014]">
              {categoriesOptions?.map((category, index) => (
                <div key={index}>
                  <Checkbox
                    checked={input?.category?.includes?.(category)}
                    onChange={(e) =>
                      categoryCheckBoxHandler(category, e?.target?.checked)
                    }
                    className="focus:ring-0"
                  />
                  <Label>{category}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Render Colors */}
          <div>
            <div className="pt-3">
              <strong className="font-semibold">COLORS</strong>
            </div>
            <div className="flex gap-2 flex-col [&_label]:m-0 mt-3 border-b-2 pb-6 border-[#00000014]">
              {colorsOptions?.map((color, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <Checkbox
                    checked={input?.color?.includes?.(color.label)}
                    className="focus:ring-0"
                    onChange={(e) =>
                      colorCheckBoxHandler(color?.label, e?.target?.checked)
                    }
                  />
                  <div className="flex items-center gap-1">
                    <AiFillCheckCircle
                      color={color?.label}
                      size={18}
                      className="border rounded-full"
                    />
                    <Label>{color?.value}</Label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Render Discount Range */}
          <div>
            <div className="pt-3">
              <strong className="font-semibold">DISCOUNT PRICE</strong>
            </div>
            <div className="flex gap-2 flex-col [&_label]:m-0 [&_label]:ms-4 mt-3 border-b-2 pb-6 border-[#00000014]">
              {discountRangesOptions?.map((range, index) => (
                <div key={index}>
                  <Radio
                    name="radio1"
                    onChange={() =>
                      setInput({ ...input, discountPercentage: range.value })
                    }
                    className="focus:ring-0"
                  />
                  <Label>{range.lable}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Render Price Range */}
          <div>
            <div className="pt-3">
              <strong className="font-semibold">PRICE</strong>
            </div>
            <div className="flex gap-2 flex-col [&_label]:m-0 [&_label]:ms-4 mt-3">
              {priceRangesOptions?.map((range, index) => (
                <div key={index}>
                  <Checkbox className="focus:ring-0" />
                  <Label>{range}</Label>
                </div>
              ))}
            </div>
          </div>
          <hr />

          <div className="py-3 flex gap-2 bg-white sticky bottom-0">
            <button className="w-48 border-2 border-black rounded-md hover:!bg-black hover:!text-white py-1 px-4">
              Clear
            </button>
            <button
              onClick={() => filterHandler()}
              className="w-48 border-2 border-black rounded-md bg-black text-white hover:!bg-white hover:!text-black py-1 px-4"
            >
              Apply
            </button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}
