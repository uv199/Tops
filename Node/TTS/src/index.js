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
import path from "path";
import fs from "fs-extra";
import { Server } from "socket.io";
import { createServer } from "http";
import { log } from "console";

const app = express();

const port = env.port || 3000;
app.use("/", json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw({ type: "*" }));
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);

app.use(express.static(path.join(__dirname, "..", "\\")));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/msg", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

const httpServer = createServer(app);

const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  console.log("-----------  socket----------->", socket.id);
  console.log("socket is connected ");
  socket.on("disconnect", () => {
    console.log("socket is dis-connected ");
  });
});

httpServer.listen(port, () => {
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


 {
        $group: {
            _id: "$brand",
            "total": { $sum: 1 },
            totalPrice :{$sum:"$price"}
        }
    }


    {
         $match: {
             brand: "Amazon",
             price: 599 ...etc
         }
     },




*/
