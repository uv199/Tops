import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  Row,
  Col,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/features/product/ProductSlice";

const options = [
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "sofa", label: "Sofa" },
  { value: "tvStand", label: "TV-Stand" },
];
const colorOption = [
  { value: "red", label: "Red" },
  { value: "Yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "Ehite" },
];
export const ProductForm = ({
  modal,
  toggle,
  formData,
  index,
  setFormData,
}) => {
  console.log("formData", formData);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    values: formData,
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post(`${BE_URL}/product/create`, data, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        console.log("resData", resData);
        dispatch(addProduct(resData?.data?.data));
        reset();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const updateHandler = (data) => {
    axios
      .put(`${BE_URL}/product/update/${formData._id}`, formData, {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        console.log("resData", resData);
        reset();
        toggle();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  // const fun=(e)=>
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-wrap">
            <Table>
              <Row xs="2">
                <Col className="d-flex flex-column">
                  <label>Title</label>
                  <input
                    className="border-1 rounded "
                    {...register("title")}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e?.target?.value })
                    }
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Description</label>
                  <input
                    className="border-1 rounded "
                    {...register("description")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e?.target?.value,
                      })
                    }
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Brand</label>
                  <input
                    className="border-1 rounded "
                    {...register("brand")}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e?.target?.value })
                    }
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Gender</label>
                  <select
                    className="border-1 rounded "
                    {...register("gender")}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e?.target?.value })
                    }
                  >
                    <option value="female">female</option>
                    <option value="male">male</option>
                  </select>
                </Col>

                <Col className="d-flex flex-column">
                  <label>Price</label>
                  <input
                    className="border-1 rounded "
                    {...register("price")}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e?.target?.value })
                    }
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Image</label>
                  <input
                    placeholder="Please enter image url "
                    className="border-1 rounded "
                    type="url"
                    {...register("thumbnail")}
                    onChange={(e) =>
                      setFormData({ ...formData, thumbnail: e?.target?.value })
                    }
                  />
                </Col>

                <Col className="d-flex flex-column">
                  <label>Discount</label>
                  <input
                    className="border-1 rounded "
                    {...register("discountPercentage")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountPercentage: e?.target?.value,
                      })
                    }
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Category</label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        isMulti
                        {...register("category", {
                          required: true,
                        })}
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(ele) => onChange(ele?.map((e) => e?.value))}
                      />
                    )}
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Color</label>
                  <Controller
                    name="color"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        isMulti
                        {...register("color", {
                          required: true,
                        })}
                        defaultValue={colorOption.filter((e) =>
                          formData.color.includes(e.value)
                        )}
                        options={colorOption}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(ele) => onChange(ele.map((e) => e.value))}
                      />
                    )}
                  />
                </Col>

                <Col className="d-flex flex-column">
                  <label>Available Color</label>
                  <input className="border-1 rounded " {...register("color")} />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Available Size</label>
                  <input
                    className="border-1 rounded "
                    {...register("size")}
                    onChange={(e) =>
                      setFormData({ ...formData, size: e?.target?.value })
                    }
                  />
                </Col>

                <Col className="d-flex flex-column">
                  <label>Available stock</label>
                  <input
                    className="border-1 rounded "
                    {...register("availableStock")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        availableStock: e?.target?.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Button className="mt-3 w-100" type="submit">
                Submit
              </Button>
              <Button
                className="mt-3 w-100"
                type="submit"
                onClick={() => updateHandler()}
              >
                Update
              </Button>
            </Table>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

/*
{
  title: String,
  description: String,
  brand: String,
  gender:  String //["male", "female", "kids"]
  price: Number,
  thumbnail: String,
  discountPercentage: Number,
  category: { type: [String] },
  color: { type: [String], default: ["red", "black", "white"] },
  size: { type: [String], default: ["44", "45", "42", "43"] },
  availableStock: Number,
  rating: { type: Number, default: 0 },
  totalRaters: { type: Number, default: 0 },
  totalSoldUnit: { type: Number, default: 0 },
},
{ timestamps: true }
*/
