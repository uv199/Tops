import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./db";
import userRouter from "./router/user";
import { env } from "../config";

const app = express();

const port = env.port || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("------>");
});
app.listen(port, () => {
  connectDB();
  console.log(`server is running on http://localhost:${port}`);
});

// [1,2,3] => [[1],[2],[3]]

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
