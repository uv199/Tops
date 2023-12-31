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
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/fetures/ProductSlice/productSlice";

const options = [
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "sofa", label: "Sofa" },
  { value: "tvStand", label: "TV-Stand" },
];
const colorOIptions = [
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
];
export default ({ modal, toggle }) => {
  const [productData, setProductData] = useState({});
  let [gender, setGender] = useState("male");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let d = {
      title: "shose",
      description: "shoes--ets",
      brand: "nike",
      gender: "male",
      price: 500,
      thumbnail: "",
      discountPercentage: 20,
      category: ["shose", "sports"],
      availableStock: 200,
    };
    dispatch(addProduct(d));
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
                <Col className="d-flex flex-row">
                  <Row>
                    <label>Gender</label>
                  </Row>
                  <Row>
                    <Col>
                      <label htmlFor="male">Male</label>
                      <input
                        checked={gender === "male"}
                        type="radio"
                        id="male"
                        onChange={() => setGender("male")}
                      />
                    </Col>
                    <Col>
                      <label htmlFor="female">Female</label>
                      <input
                        checked={gender === "female"}
                        type="radio"
                        id="female"
                        onChange={() => setGender("female")}
                      />
                    </Col>
                    <Col>
                      <label htmlFor="kids">Kids</label>
                      <input
                        checked={gender === "kids"}
                        type="radio"
                        id="kids"
                        onChange={() => setGender("kids")}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col className="d-flex flex-column">
                  <label>Price</label>
                  <input className="border-1 rounded " {...register("price")} />
                </Col>
                <Col className="d-flex flex-column">
                  <label>Image</label>
                  <input
                    placeholder="Please enter image url "
                    className="border-1 rounded "
                    type="url"
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
                        options={colorOIptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(ele) => onChange(ele.map((e) => e.value))}
                      />
                    )}
                  />
                </Col>

                {/* <Col className="d-flex flex-column">
                  <label>Available Color</label>
                  <input className="border-1 rounded " {...register("color")} />
                </Col> */}
                {/* <Col className="d-flex flex-column">
                  <label>Available Size</label>
                  <input className="border-1 rounded " {...register("size")} />
                </Col> */}

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
