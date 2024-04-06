import "dotenv/config";
import express from "express";
// import bodyParser from "body-parser";
import userRouter from "./router/user";
const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded());
app.use("/user", userRouter);

app.get("/", (_, res) => {
  res.send("hello world..!");
});

export default app;
