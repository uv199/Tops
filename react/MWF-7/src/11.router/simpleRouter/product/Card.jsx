import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function CardDefault({ data }) {
  const navigate = useNavigate();
  return (
    <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative ">
        <img
          className="max-w-full h-[150px]"
          src={data.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 truncate text-inherit"
        >
          {data.title}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={() => navigate(`/product-details/${data.id}`)}
          className="w-full"
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
