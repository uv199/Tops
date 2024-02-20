import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./db";
import userRouter from "./router/user";

const app = express();

const port = process.env.PORT || 3000;

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
