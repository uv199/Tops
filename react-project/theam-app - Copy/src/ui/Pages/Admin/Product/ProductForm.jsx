import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Row,
  Col,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const options = [
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "sofa", label: "Sofa" },
  { value: "tvStand", label: "TV-Stand" },
];
export const ProductForm = ({ modal, toggle }) => {
  const [productData, setProductData] = useState({});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("-----darta---->", data);

  // const fun=(e)=>
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
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
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        title: e?.target?.value,
                      })
                    }
                    {...register("title")}
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Description</label>
                  <input
                    className="border-1 rounded "
                    {...register("description")}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
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
                      setProductData({
                        ...productData,
                        brand: e?.target?.value,
                      })
                    }
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Gender</label>
                  <select className="border-1 rounded " {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                  </select>
                </Col>

                <Col className="d-flex flex-column">
                  <label>Price</label>
                  <input className="border-1 rounded " {...register("price")} />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Image</label>
                  <input
                    className="border-1 rounded "
                    {...register("thumbnail")}
                  />
                </Col>

                <Col className="d-flex flex-column">
                  <label>Discount</label>
                  <input
                    className="border-1 rounded "
                    {...register("discountPercentage")}
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Category</label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        isMulti
                        {...field}
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    )}
                  />
                </Col>
                {/* <Col className="d-flex flex-column">
                  <label>Category</label>
                  {/* <input
                    className="border-1 rounded "
                    {...register("category")}
                  /> */}
                {/* <Select
                    isMulti
                    onChange={(e) => fun(e)}
                    name="category"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  /> */}
                {/* </Col>  */}

                <Col className="d-flex flex-column">
                  <label>Available Color</label>
                  <input className="border-1 rounded " {...register("color")} />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Available Size</label>
                  <input className="border-1 rounded " {...register("size")} />
                </Col>

                <Col className="d-flex flex-column">
                  <label>Available stock</label>
                  <input
                    className="border-1 rounded "
                    {...register("availableStock")}
                  />
                </Col>
              </Row>

              <Button className="mt-3 w-100" type="submit">
                Submit
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
  gender: {
    type: String,
    enum: ["male", "female", "kids"],
  },
  price: Number,
  images: [String],
  thumbnail: String,
  discountPercentage: Number,
  category: { type: [String] },
  color: { type: [String], default: ["red", "black", "white"] },
  size: { type: [String], default: ["44", "45", "42", "43"] },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  availableStock: Number,
  rating: { type: Number, default: 0 },
  totalRaters: { type: Number, default: 0 },
  totalSoldUnit: { type: Number, default: 0 },
},
{ timestamps: true }
*/
