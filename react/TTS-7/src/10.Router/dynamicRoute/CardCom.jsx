import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export function CardCom({ data }) {
  const navigate = useNavigate();

  const redirectHandler = () => {
    console.log("id", data.id);
    navigate(`/product/${data.id}`, { state: { name: "urvish" } });
  };
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
    >
      <img
        onClick={() => redirectHandler()}
        src={data?.image}
        className="max-h-[100px]"
        alt=""
        srcset=""
      />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}
