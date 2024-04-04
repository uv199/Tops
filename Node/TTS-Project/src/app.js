import "dotenv/config";
import express from "express";
// import bodyParser from "body-parser";
const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded());
// app.use();

app.get("/", (_, res) => {
  res.send("hello world..!");
});

export default app;
