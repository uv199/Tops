import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
// import { User } from "./models/user";
import userRouter from "./router/user";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRouter);
app.listen(3000, () => {
  console.log(`server is runing on http://localhost:${port}`);
});
