import React, { useEffect, useState } from "react";
import CardCom from "../../../Component/Card/CardCom";
import bag1 from "../../../../../public/bag1.webp";
import { Grid3x3GapFill, GridFill } from "react-bootstrap-icons";
// import icon4x4 from "../../../../assets/4x4.png";
import { API } from "../../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import FilterCom from "../../../Component/Filter/FilterCom";
import { Filter } from "lucide-react";

export default function CommonProduct() {
  const [modal, setModal] = useState(false);
  let [filter, setFilter] = useState({
    color: [],
    category: [],
    price: {
      lt: 15000,
      gt: 0,
    },
    discountPercentage: {
      lt: 100,
      gt: 0,
    },
  });
  let [gridCols, setGridCols] = useState("grid grid-cols-4");
  let [product, setProduct] = useState([]);

  const [cookies] = useCookies(["token"]);
  const toggle = () => setModal(!modal);
  const navigate = useNavigate();
  const { type } = useParams();

  useEffect(() => {
    if (type !== "all") {
      setFilter({ ...filter, mainCategory: type });
    } else {
      setFilter({ ...filter, mainCategory: "" });
    }
  }, [type]);

  useEffect(() => {
    (async function getData(params) {
      try {
        let { data } = await API.get("/product/getAll", {
          params: filter,
        });
        setProduct(data.data);
      } catch (error) {
        console.log("-----------  error----------->", error);
      }
    })();
  }, [filter]);

  const addToCart = async (productId) => {
    if (!cookies?.token) return navigate("/login");
    try {
      let { data } = await API.post("/cart/create/" + productId, null, {
        headers: {
          Authorization: "Bearer " + cookies.token,
        },
      });

      toast.success("produsct added to cart");
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  };
  return (
    <div>
      <FilterCom
        modal={modal}
        toggle={toggle}
        setFilter={setFilter}
        filter={filter}
      />
      <img src={bag1} className="w-[100%] max-h-[500px]" alt="" />
      <div className="flex justify-between items-center my-12 mx-4">
        <button
          onClick={toggle}
          className="flex bg-white border border-black py-1 px-3 rounded-md"
        >
          <Filter color="gray" />
          FILTER
        </button>

        <div className="flex justify-end [&_*]:mr-2 ">
          <GridFill
            className="text-gray-400 text-xl "
            onClick={() => setGridCols("grid grid-cols-2")}
          />
          <Grid3x3GapFill
            className="text-xl text-gray-400 "
            onClick={() => setGridCols("grid grid-cols-3")}
          />
          {/* <img
          src={icon4x4}
          className="h-[20px] !fill-gray-400"
          alt=""
          onClick={() => setGridCols("grid grid-cols-4")}
        /> */}
        </div>
      </div>
      <hr />
      <div className={gridCols} style={{ padding: "20px" }}>
        {product?.map?.((e) => {
          return <CardCom data={e} key={e._id} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
}
