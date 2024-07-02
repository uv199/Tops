import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CardDefault({ data }) {
  console.log("-----------  data----------->", data);
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
        <Typography variant="h5" color="blue-gray" className="mb-2 truncate text-inherit">
          {data.title}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
