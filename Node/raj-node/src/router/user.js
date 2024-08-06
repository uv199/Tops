import express, { Router } from "express";
import { sendMailService } from "../functions/email/sendMail.js";

const router = express.Router();

router.get("/getAll", (req, res) => {
  // get all user
});
router.get("/getById/:id", (req, res) => {
  // get user by id
});
router.get("/signin", (req, res) => {
  // get user by email
});

router.post("/register", async (req, res) => {
  // create a new user
  // after create we get response and then send email
  console.log("------1------>")
  try {
    let obj = {
      to: "urvish@gmail.com",
      subject: "verify account",
      text: "please verify account before login",
    };
    console.log("------2------>")
    await sendMailService(obj);
    console.log("------3------>")
    res.send("Verify account");
  } catch (error) {
    console.log("🚀 ~ router.post ~ error:", error);
  }
});

router.put("/update/:id", (req, res) => {
  // update a user by id
});

router.delete("/delete/:id", (req, res) => {
  // delete a user by id
});

export default router;
