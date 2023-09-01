import express from "express";
import { Routes } from "./routers"
import { dbConnection } from "./db";
const app = express();

app.use(express.json());

app.use("/user", Routes.userRoute);
app.use("/product", Routes.productRoute);


app.listen(3000, () => {
  dbConnection();
  console.log(`your server is running on http://localhost:3000/`);
});
