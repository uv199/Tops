import express from "express";
import userRouter from "./routers/user";
import { dbConnection } from "./db";
import User from "./models/user";
const bodyParser = require("body-parser");
const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.listen(3000, () => {
  dbConnection();
  console.log(`your server is running on http://localhost:3000/`);
});
