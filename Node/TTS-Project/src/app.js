import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from "./router/user";
import likeRouter from "./router/like";
import postRouter from "./router/post";

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/like", likeRouter);

app.get("/", (_, res) => {
  res.send("hello world..!");
});

export default app;
