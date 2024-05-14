import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./db/db.js";

const app = express();

app.use(express.json()); // body
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hellow world");
});

connectDB();
app.listen(5000, () => {
  console.log(`server is running on http://localhost:5000`);
});
