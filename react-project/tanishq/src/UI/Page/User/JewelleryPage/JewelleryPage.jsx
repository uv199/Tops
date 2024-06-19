import React, { useEffect, useState } from "react";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineTune } from "react-icons/md";
import FilterModal from "../../../Modal/FilterModal";
import { getAllProduct } from "../../../Api/Product";
import { useParams } from "react-router-dom";
import { colors } from "@mui/material";
import { APIinstance } from "../../../Api/axiosConfig";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { fetchCartApi } from "../../../../redux/cart/cartSlice";

export default function JewelleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  let [allProduct, setAllProduct] = useState([]);
  let [count, setCount] = useState(0);
  let [filter, setFilter] = useState({
    mainCategory: "",
    price: { gt: 0, lt: 1500000 },
    discountPercentage: { gt: 0, lt: 10 },
    brand: "",
    size: [],
  });

  let [cookie] = useCookies(["token"]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  let data = useParams();

  useEffect(() => {
    if (data.type === "all") {
      setFilter({ ...filter, mainCategory: "" });
    } else {
      setFilter({ ...filter, mainCategory: data.type });
    }
  }, [data]);
  let dispatch = useDispatch();
  const addToCartHandler = (id) => {
    console.log("-----------  id----------->", id);
    APIinstance.post(`/cart/create/${id}`, null, {
      headers: {
        authorization: "bearer " + cookie.token,
      },
    }).then((res) => {
      dispatch(fetchCartApi(cookie.token));
    });
  };

  useEffect(() => {
    async function getAll(params) {
      let { data, error } = await getAllProduct(filter);
      setAllProduct(data.data);
      setCount(data.count);
    }
    getAll();
  }, [filter]);

  return (
    <div>
      <div>
        <FilterModal
          filter={filter}
          setFilter={setFilter}
          isOpen={modalOpen}
          toggle={toggleModal}
        />
      </div>

      <div className="w-100 flex justify-between bg-[#FCF9F9] px-20 py-3 my-3 position-relative ">
        <div className="flex items-center">
          <span className="flex justify-center items-center text-xl gap-3 text-[#832729] cursor-pointer mr-5">
            <MdOutlineTune onClick={toggleModal} />
            Filter
          </span>
          <h1 className="font-[600] text-lg">Count : {count}</h1>
        </div>
        <span className="flex justify-center items-center text-xl gap-3 text-[#832729] cursor-pointer">
          <SlDiamond /> Daily were Jewellery
        </span>
      </div>

      <div className="flex min-h-screen items-center justify-center  px-20 py-[2rem] flex-col">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 position-relative  ">
          {allProduct?.map((item, index) => (
            <div
              key={index}
              className="relative group  cursor-pointer group overflow-hidden text-gray-50      h-[20rem] w-56  hover:duration-500 duration-700 hover:drop-shadow-md"
            >
              <img
                src={item.thumbnail}
                className="h-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              />

              <div className="absolute bg-[#fdf2f2c6] -bottom-[5rem] w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-xl ">
                  {item.title}
                </span>
                <span className="text-lime-400 font-bold text-xs"></span>
                <p className="text-neutral-800 text-lg">₹ {item.price}</p>
                <button
                  className=" border-[1px] border-black mt-2 px-3.5 font-com text-lg  capitalize text-black shadow hover:shadow-black/100 "
                  onClick={() => addToCartHandler(item._id)}
                >
                  Add To Card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
