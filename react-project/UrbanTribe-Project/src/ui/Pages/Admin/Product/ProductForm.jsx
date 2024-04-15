import { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Select from "react-select";
let initalState = {
  title: "",
  description: "",
  brand: "",
  gender: "", // [male,female,kids]
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [],
  thumbnail: "",
  color: [],
  size: [],
  mainCategorie: "",
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

export default function ProductForm({ modal, toggle }) {
  const [product, setProduct] = useState(initalState);

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
                onChange={(event) => {}}
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
              />
            </div>
            <div>
              <Label htmlFor="TextInput" value="Size" />
              <div className="grid grid-cols-8">
                <div className=" flex items-center gap-2 ">
                  <Checkbox id="s" className="focus:ring-0" />
                  <Label htmlFor="s">S</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="m" className="focus:ring-0" />
                  <Label htmlFor="m">M</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="l" className="focus:ring-0" />
                  <Label htmlFor="l">L</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="xl" className="focus:ring-0" />
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
              />
            </div>
            <div>
              <Label htmlFor="text" value="Main Category" />
              <Select
                options={mainCategoryOptions}
                placeholder="Select chatagory"
              />
            </div>
            <div>
              <Label htmlFor="text" value="Price" />
              <TextInput
                id="text"
                type="number"
                placeholder="Enter a price"
                required
              />
            </div>
            <div>
              <Label htmlFor="text" value="Image" />
              <TextInput
                id="text"
                type="text"
                required
                placeholder="Enter a imageURL"
              />
            </div>
            <div>
              <Label htmlFor="text" value="Stock" />
              <TextInput
                id="text"
                type="number"
                required
                placeholder="Enter a available stock"
              />
            </div>
            <div>
              <Label htmlFor="text" value="Discount" />
              <TextInput
                id="text"
                type="number"
                required
                placeholder="Enter a discount"
              />
            </div>
            <Button
              className="focus:ring-0 w-[100%] rounded-md border !border-red-600 bg-white text-red-600 hover:text-white hover:!bg-red-600 "
              onClick={() => setOpenModal(true)}
            >
              SUBMIT
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
