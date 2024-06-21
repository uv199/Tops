import react, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  TextInput,
} from "flowbite-react";
import { updateProduct } from "../Api/Product";
import { toast } from "react-toastify";

export function ProductModal({
  openModal,
  setOpenModal,
  addProduct,
  productdata,
  setProductData,
  updateMode,
  setUpdateMode,
  refetch,
}) {
  const sizeData = ["1.5", "2", "3", "4"];
  const { control, handleSubmit, setValue, getValues, reset } = useForm({
    defaultValues: {},
  });

  const addProductHandler = (data) => {
    addProduct(data);
    reset();
    setOpenModal(false);
    setUpdateMode(false);
  };

  useEffect(() => {
    reset(productdata);
  }, [productdata]);

  const closeHandler = () => {
    setOpenModal(false);
    reset({});
    setProductData({
      title: "",
      description: "",
      brand: "",
      gender: "",
      category: "",
      price: "",
      discount: "",
      thumbnail: "",
      size: "",
    });
    setUpdateMode(false);
  };

  const updateHandler = async (inputdata) => {
    let { data, error } = await updateProduct(inputdata, inputdata?._id);
    if (error) toast.error("Somthing Went Wrong");
    else {
      toast.success("Data Updated");
    }
    setOpenModal(false);
    reset({});
    setProductData({});
    refetch();
  };
  return (
    <>
      <Modal show={openModal} onClose={() => closeHandler()}>
        <Modal.Header className="capitalize  bg-[#DBC0C1] ">
          Upadate Data
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(addProductHandler)} className="px-4 ">
            <div className="flex flex-col gap-3">
              {/*===========TITLE===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Title" />
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => <TextInput type="text" {...field} />}
                />
              </div>

              {/*===========DESCRIPTION===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Description" />
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextInput type="textarea" {...field} />
                  )}
                />
              </div>

              {/*===========BRAND===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Brand" />
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => <TextInput type="text" {...field} />}
                />
              </div>

              {/*===========GENDER===============*/}
              <div className="flex flex-col gap-2">
                <legend className="text-lg font-medium">Gender</legend>
                <div className="flex items-center gap-2">
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

              {/*===========category===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Category" />
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <ReactSelect
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
                        { value: "24karet", label: "24karet" },
                        { value: "wedding", label: "Wedding" },
                        { value: "diamond", label: "Diamond" },
                        { value: "dailywere", label: "Dailywere" },
                        { value: "18karet", label: "18karet" },
                        { value: "22karet", label: "22karet" },
                        { value: "silver", label: "Silver" },
                        { value: "gold", label: "Gold" },
                        { value: "platinam", label: "Platinam" },
                        { value: "silver", label: "Silver" },
                      ]}
                    />
                  )}
                />
              </div>

              {/*===========PRICE===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Price" />
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => <TextInput type="number" {...field} />}
                />
              </div>

              {/*===========DISCOUNT===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Discount" />
                <Controller
                  name="discount"
                  control={control}
                  render={({ field }) => <TextInput type="number" {...field} />}
                />
              </div>
              {/*===========THUMBNAILS===============*/}
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-medium" value="Thumbnail" />
                <Controller
                  name="thumbnail"
                  control={control}
                  render={({ field }) => <TextInput type="text" {...field} />}
                />
              </div>
              {/*===========SIZE===============*/}
              <div className="flex flex-col ">
                <legend className="text-lg font-medium">Size</legend>

                {sizeData.map((size) => (
                  <div className="flex gap-2 items-center" key={size}>
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
              {updateMode ? (
                <Button onClick={handleSubmit(updateHandler)}>
                  Update Product
                </Button>
              ) : (
                <Button type="submit">Add Product</Button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
