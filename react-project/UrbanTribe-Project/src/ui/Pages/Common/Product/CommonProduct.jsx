import React, { useEffect, useState } from "react";
import CardCom from "../../../Component/Card/CardCom";
import bag1 from "../../../../../public/bag1.webp";
import { Grid3x3GapFill, GridFill } from "react-bootstrap-icons";
// import icon4x4 from "../../../../assets/4x4.png";
import { API } from "../../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CommonProduct() {
  let [gridCols, setGridCols] = useState("grid grid-cols-4");
  let [product, setProduct] = useState([]);

  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getData(params) {
      try {
        let { data } = await API.get("/product/getAll");
        setProduct(data.data);
      } catch (error) {
        console.log("-----------  error----------->", error);
      }
    })();
  }, []);

  const addToCart = async (productId) => {
    console.log("-----------  cookies?.token----------->", cookies?.token);
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
      <img src={bag1} className="w-[100%] max-h-[500px]" alt="" />
      <div className="flex justify-end p-3 [&_*]:mr-2 mt-10">
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
      <hr />
      <div className={gridCols} style={{ padding: "20px" }}>
        {product?.map?.((e) => {
          return <CardCom data={e} key={e._id} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
}
