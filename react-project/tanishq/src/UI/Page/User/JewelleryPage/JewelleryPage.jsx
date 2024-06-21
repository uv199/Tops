import React, { useEffect, useState } from "react";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineTune } from "react-icons/md";
import FilterModal from "../../../Modal/FilterModal";
import { getAllProduct } from "../../../Api/Product";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { APIinstance } from "../../../Api/axiosConfig";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { fetchCartApi } from "../../../../Redux/Cart/cartSlice";

export default function JewelleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  let [allProduct, setAllProduct] = useState([]);
  let [count, setCount] = useState(0);
  let [filter, setFilter] = useState({});
const [Cookie]=useCookies()
const dispatch=useDispatch()

useEffect(()=>{
dispatch(fetchCartApi(Cookie.token))
},[]);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const addToCartHandler = (id) => {
    // console.log("-----------  id----------->", id);
    APIinstance.post(`/cart/create/${id}`, null, {
      headers: {
        authorization: "bearer " + Cookie.token,
      },
    }).then((res) => {
      dispatch(fetchCartApi(Cookie.token));
    });
  };

  let data = useParams();

  useEffect(() => {
    if (data.type === "all") {
      setFilter({ ...filter, mainCategory: "" });
    } else {
      setFilter({ ...filter, mainCategory: data.type });
    }
  }, [data]);

  useEffect(() => {
    async function getAll(params) {
      let { data, error } = await getAllProduct(filter);
      // console.log("-----------  data----------->", data.count);
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 position-relative  ">
          {allProduct?.map((item, index) => (
            <div
              key={index}
              className="relative group  cursor-pointer group overflow-hidden text-gray-50 border-black-500 border-[1px]   h-[20rem] w-[230px]  hover:duration-500 duration-700 hover:drop-shadow-lg"
            >
              <div className="">
                <img
                  src={item.thumbnail}
                  className="h-full   absolute object-fill transition-transform duration-500 group-hover:rotate-3   group-hover:scale-125 "
                />
                <p className="text-white text-md relative  inset-2   text-center bg-[#832729] w-12 ">
                  {item.discountPercentage}%
                </p>
                <span     className="p-1 bg-white h-8 rounded-full drop-shadow-lg absolute top-2 right-2 w-8"
                >
                  <CiHeart className="text-[#832729] text-2xl  " />
                </span>
              </div>
              <div className="absolute bg-[#fdf2f2c6] -bottom-[3rem] w-full  p-3  flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-gray-800 font-bold text-xl capitalize">
                  {item.title}
                </span>
                <span className="flex gap-4 items-center">

                <del className="text-neutral-600 text-md">₹ {item.price}</del>
                <p className="text-black text-lg">
                  ₹{Math.round(
                    item.price - (item.price * item.discountPercentage) / 100
                  )}
                </p>
                </span>
                <button className=" border-[1px] border-black mt-2 px-3.5 font-com text-lg  capitalize text-black shadow hover:shadow-black/100 " 
                onClick={()=>addToCartHandler(item._id)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
