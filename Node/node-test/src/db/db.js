import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test-setup")
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      console.log("Database connection failed");
    });
};
