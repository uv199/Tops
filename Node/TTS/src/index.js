// const env = require("dotenv")
// env.config()
import "dotenv/config";
import bodyParser, { json } from "body-parser";
import express from "express";
import { connectDB } from "./db";
import userRouter from "./router/user";
import orderRouter from "./router/order";
import productRouter from "./router/product";
import { env } from "../config";
import { addPreData } from "./db/addPredefineData/addPreData";

const app = express();

const port = env.port || 3000;
app.use("/", json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({ type: "*" }));

app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);

app.post("/", (req, res) => {
  res.send("------>");
});
app.listen(port, () => {
  connectDB();
  addPreData();
  console.log(`server is running on http://localhost:${port}`);
});

/*
user 
- name
- email
- number
- password
- dob
- address:[
  {
    lineone,
    city,
    pincode,
    state,
    isPermenant : false
  },
  {
    lineone,
    city,
    pincode,
    state,
    isPermenant : true
  }
],
- userType,
- gender
- image

product 
- title
- dec
- price
- discount
- chategory
- sub cat : []
- image : []
- color
- thumbnail
- availableCount
- isAvailable
- size : []
- rating
- offer
- gender







*/
