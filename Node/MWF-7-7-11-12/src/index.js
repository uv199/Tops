import "dotenv/config";
import express from "express";
import { Routes } from "./routers";
import cors from "cors";
import { dbConnection } from "./db";
import { AddAdmin, AddProductData } from "./db/addDefaultData";
import { updateOldUser, updateOldUser2 } from "./db/script";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/user", Routes.userRoute);
app.use("/product", Routes.productRoute);
app.use("/cart", Routes.cartRouter);
app.use("/wishlist", Routes.wishListRouter);
app.use("/order", Routes.orderRouter);

app.listen(port, () => {
  // updateOldUser();
  dbConnection();
  // AddAdmin();
  // AddProductData();
  updateOldUser2();
  console.log(`your server is running on http://localhost:${port}/`);
});
