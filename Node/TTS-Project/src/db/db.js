import mongoose from "mongoose";
import { config } from "../config.js";

export const dbConnect = () => {
  return mongoose
    .connect(config.db_url)
    .then(() => {
      console.log("database connect succesfully");
    })
    .catch((err) => {
      console.log("-----------  err----------->", err);
    });
};
