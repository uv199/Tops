import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function ProductTable({ productData }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHead>
          <TableHeadCell className="bg-gray-200">Sr. no</TableHeadCell>
          <TableHeadCell className="bg-gray-200">Product name</TableHeadCell>
          <TableHeadCell className="bg-gray-200">Color</TableHeadCell>
          <TableHeadCell className="bg-gray-200">Category</TableHeadCell>
          <TableHeadCell className="bg-gray-200">Price</TableHeadCell>
          <TableHeadCell className="bg-gray-200">
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {productData?.map((e, i) => {
            return (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <img src={e.thumbnail} className="h-[70px]" alt="" />
                </TableCell>
                <TableCell>Sliver</TableCell>
                <TableCell>Laptop</TableCell>
                <TableCell>$2999</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

let data = {
  _id: "6641a9ac31fb759fa4b1053f",
  title: "Tasty Frozen Tuna",
  description:
    "Sit sed asperiores a nisi rerum exercitationem eum quidem minus.",
  price: 4780,
  discountPercentage: 44,
  availableStock: 388,
  brand: "bigBillonDay",
  category: ["leather", "rainProof"],
  mainCategory: "casual",
  color: ["yellow", "orange", "green"],
  size: ["S", "M", "L", "XL"],
  rating: 3,
  thumbnail:
    "https://urbantribe.in/cdn/shop/products/1_97d0e36f-ae66-49cb-bd65-6c82baca2587_1024x1024.jpg?v=1657954912",
};
