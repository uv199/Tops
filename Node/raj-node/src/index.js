import express from "express";
import { connectDB } from "./db/dbConfig.js";
import userRouter from "./router/user.js";

const app = express();

app.use("/user/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(5000, () => {
      console.log(`Server is running on port http://localhost:5000`);
    });
  })
  .catch((err) => {
    console.log("Database connection error");
  });


  // validation 
  // password bycrypt
  // 