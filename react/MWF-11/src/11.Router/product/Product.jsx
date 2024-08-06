import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let [data, setData] = useState([]);
  console.log("-----------  data----------->", data);

  const navigate = useNavigate();
  useEffect(() => {
    async function name(params) {
      let response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    }
    name();
  }, []);

  return (
    <div className="min-h-screen bg-gray-400 min-w-[100vw] flex flex-col justify-center items-center">
      <div className="grid grid-cols-5 p-4 gap-4">
        {data.map((e) => {
          return (
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <div className="max-h-[150px]">
                  <img
                    src={e.image}
                    className="object-contain "
                    alt="ui/ux review check"
                  />
                </div>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="truncate  font-medium"
                  >
                    {e.title}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {e.rating.rate}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button
                  onClick={() => navigate(`/product/${e.id}`)}
                  size="lg"
                  fullWidth={true}
                >
                  View
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
