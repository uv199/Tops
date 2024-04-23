import { useEffect, useReducer, useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Select from "react-select";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { size } from "lodash";
import PreviewData from "./PreviewData";
let initalState = {
  title: "",
  description: "",
  brand: "",
  // gender: "", // [male,female,kids]
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [],
  thumbnail: "",
  color: [],
  size: [],
  mainCategory: "",
};

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];
const mainCategoryOptions = [
  { value: "casual", label: "casual" },
  { value: "sports", label: "sports" },
  { value: "school", label: "school" },
  { value: "professional", label: "professional" },
  { value: "travel", label: "travel" },
  { value: "lunch", label: "lunch" },
  { value: "corporate", label: "corporate" },
];

export default function ProductForm({ modal, toggle, updatedData, refetch }) {
  const [product, setProduct] = useState(updatedData);
  const [cookies] = useCookies([]);

  useEffect(() => {
    let arr = Object.keys(updatedData);
    if (arr.length > 0) {
      setProduct(updatedData);
    } else {
      setProduct(initalState);
    }
  }, [updatedData]);

  const submitHandler = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
      headers: {
        authorization: "Bearer " + cookies.token,
      },
    })
      .then((res) => {
        toast.success("Product added successfully");
        toggle();
        refetch();
      })
      .catch((err) => {
        toast.error("Somthing went wrong");
      });
  };

  const updateHandler = () => {
    axios({
      method: "put",
      url: "http://localhost:9999/product/update/" + product?._id,
      data: product,
      headers: {
        authorization: "Bearer " + cookies.token,
      },
    })
      .then((res) => {
        toast.success("Product update successfully");
        toggle();
        refetch();
      })
      .catch((err) => {
        toast.error("Somthing went wrong");
      });
  };

  const checkboxHandler = (value, isChecked) => {
    if (isChecked) {
      setProduct({ ...product, size: [...product?.size, value] });
    } else {
      const restSize = product.size.filter((e) => e !== value);
      setProduct({ ...product, size: restSize });
    }
  };

  return (
    <>
      <div className="flex justify-end mr-8">
        <Button
          className="focus:ring-0 mx-2 my-2 rounded-md border !border-red-600  bg-white text-red-600 hover:text-white hover:!bg-red-600 "
          onClick={() => toggle()}
        >
          Add Product
        </Button>
      </div>
      <Modal dismissible show={modal} size="xl" onClose={toggle}>
        <Modal.Header>Product Form</Modal.Header>
        <Modal.Body>
          <div className="space-y-3">
            <div>
              <Label htmlFor="titel" value="Title" />
              <TextInput
                id="titel"
                placeholder="Enter a title"
                onChange={(e) =>
                  setProduct({ ...product, title: e?.target.value })
                }
                value={product.title}
                required
              />
            </div>
            <div>
              <Label htmlFor="text" value="Description" />
              <TextInput
                id="text"
                placeholder="Enter a discription"
                type="text"
                required
                onChange={(e) =>
                  setProduct({ ...product, description: e?.target.value })
                }
                value={product.description}
              />
            </div>
            <div>
              <Label htmlFor="TextInput" value="Size" />
              <div className="grid grid-cols-8">
                <div className=" flex items-center gap-2 ">
                  <Checkbox
                    onChange={(e) => checkboxHandler("S", e.target.checked)}
                    checked={product?.size.includes("S")}
                    id="s"
                    className="focus:ring-0"
                  />
                  <Label htmlFor="s">S</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    onChange={(e) => checkboxHandler("M", e.target.checked)}
                    checked={product?.size.includes("M")}
                    id="m"
                    className="focus:ring-0"
                  />
                  <Label htmlFor="m">M</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    onChange={(e) => checkboxHandler("L", e.target.checked)}
                    checked={product?.size.includes("L")}
                    id="l"
                    className="focus:ring-0"
                  />
                  <Label htmlFor="l">L</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    onChange={(e) => checkboxHandler("XL", e.target.checked)}
                    checked={product?.size.includes("XL")}
                    id="xl"
                    className="focus:ring-0"
                  />
                  <Label htmlFor="xl">XL</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="text" value="Color" />
              <Select
                options={colorOptions}
                placeholder="Select colors"
                isMulti
                onChange={(e) =>
                  setProduct({ ...product, color: e.map((obj) => obj.value) })
                }
                value={product?.color?.map((e) => {
                  return { value: e, label: e };
                })}
              />
            </div>
            <div>
              <Label htmlFor="text" value="Main Category" />
              <Select
                options={mainCategoryOptions}
                placeholder="Select chatagory"
                onChange={(e) =>
                  setProduct({ ...product, mainCategory: e.value })
                }
                value={{
                  value: product?.mainCategory,
                  label: product?.mainCategory,
                }}
              />
            </div>
            <div>
              <Label htmlFor="text" value="Price" />
              <TextInput
                id="text"
                type="number"
                placeholder="Enter a price"
                required
                onChange={(e) =>
                  setProduct({ ...product, price: e?.target.value })
                }
                value={product.price}
              />
            </div>
            <div>
              <Label htmlFor="text" value="Image" />
              <TextInput
                id="text"
                type="text"
                required
                placeholder="Enter a imageURL"
                onChange={(e) =>
                  setProduct({ ...product, thumbnail: e?.target.value })
                }
                value={product.thumbnail}
              />
            </div>
            <div>
              <Label htmlFor="text" value="Stock" />
              <TextInput
                id="text"
                type="number"
                required
                placeholder="Enter a available stock"
                onChange={(e) =>
                  setProduct({ ...product, availableStock: e?.target.value })
                }
                value={product.availableStock}
              />
            </div>
            <div>
              <Label htmlFor="text" value="Discount" />
              <TextInput
                id="text"
                type="number"
                required
                placeholder="Enter a discount"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    discountPercentage: e?.target.value,
                  })
                }
                value={product.discountPercentage}
              />
            </div>

            {Object.keys(updatedData).length > 0 ? (
              <Button
                className="focus:ring-0 w-[100%] rounded-md border !border-red-600 bg-white text-red-600 hover:text-white hover:!bg-red-600 "
                onClick={() => updateHandler()}
              >
                UPDATE
              </Button>
            ) : (
              <Button
                className="focus:ring-0 w-[100%] rounded-md border !border-red-600 bg-white text-red-600 hover:text-white hover:!bg-red-600 "
                onClick={() => submitHandler()}
              >
                SUBMIT
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

let e = [
  { a: 10, b: 30 },
  { a: 100, b: 30 },
  { a: 1000, b: 30 },
];
let arr = e.map((e) => e.a);

/*
product.color = [10,100,1000] 
// convert 
[
  { value: 10, lable: 10 },
  { value: 100, lable: 100 },
  { value: 1000, lable: 1000 },
]

product.color.map((e)=>{value:e,lable:e})

product.mainCh = "ring"

e = {lable:"ring",value:"ring"}
e.value

{lable.product.mainCh,lable :product.mainCh}
*/
