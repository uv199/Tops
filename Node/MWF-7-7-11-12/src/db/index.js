import mongoose from "mongoose";

export const dbConnection = () => {
  console.log("test====");
  mongoose
    .connect("mongodb://127.0.0.1:27017/School")
    .then((res) => {
      console.log("Databadse connection successful...!");
    })
    .catch((err) => {
      console.log("Database connection faild...", err);
    });
};
