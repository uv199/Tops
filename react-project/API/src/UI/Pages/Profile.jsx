import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = [
  "Sr.No",
  "Name",
  "Email",
  "Age",
  "Number",
  "Address",
  "Pincode",
  "City",
  "State",
  "Edit",
  "Delete",
];

export default function Profile() {
  let [data, setData] = useState({});
  let [x, setX] = useState(true);

  const refetch = () => setX(!x);
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchData() {
      let responseData = await axios.get("http://localhost:9999/user/getAll");
      setData(responseData.data.data);
    })();
  }, [x]);

  const deleteHandler = async (id) => {
    try {
      let response = await axios.delete(
        `http://localhost:9999/user/delete/${id}`
      );
      refetch();
    } catch (error) {
      alert("Somthing is wrong try again");
    }
  };

  const redirect = () => {
    try {
      console.log("--->");
      navigate("/login");
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  };

  return (
    <div>
      <div className="mt-2">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map?.((e, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={e?._id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.number}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.age}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.address?.[0]?.add}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.address?.[0]?.pinCode}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.address?.[0]?.city}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e?.address?.[0]?.state}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue"
                      onClick={() => navigate("/login", { state: e })}
                      className=" cursor-pointer font-bold underline"
                    >
                      Edit
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="red"
                      className="font-bold underline"
                      onClick={() => deleteHandler(e?._id)}
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
