import express from "express";
import User from "./src/models/user";

const userRouter = express.Router();

// userRouter.get("/sanket", (req, res) => {
userRouter.post("/create", (req, res) => {
  User.create(req?.body)
    .then((resData) => {
      res.send(resData);
    })
    .catch((err) => {
      res.send(err);
    });
});

userRouter.get("/allUser", (req, res) => {
  User.find()
    .then((userRes) => {
      res.status(200).send(userRes);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
userRouter.get("/getUsers", async (req, res) => {
  try {
    let data = await User.findOne({ name: "urvish" });
    // throw new Error("somthing went wrong ...?");
    if (data.length > 0) {
      res.send(data);
    } else {
      res.send("data not Found...!");
    }
  } catch (error) {
    console.log("test");
    res.status(400).send(error.message);
  }
});
export default userRouter;

// teacher : name,email,password,add,classTeacher:id,subject,salary,gender
// student : name,email,password,add,classTeacher:id,subject,fees,gender
// admin : name,email,password,add
// class : name,div,teacher:id,monitor:id,studentcount,

// user : name,email,password,add,classTeacher:id,subject,salary,gender,fees type : "admin/teacher/stuident" // usertype:id
// userType: "";
//class : name,div,teacher:id,monitor:id,studentcount,

