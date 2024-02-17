import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { User } from "./models/user";

const app = express();
const port = process.env.PORT || 3000;
console.log("-----------  process.env.PORT----------->", process.env.PORT);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, () => {
  console.log(`server is runing on http://localhost:${port}`);
});
