import express from "express";
import { db } from "../db/db";
const router = express.Router();

// CREATE USER
router.get("/getAll", async (req, res) => {
  const User = await db("users");
  const cursor = User.find({});
  const users = await cursor.toArray();
  res.status(200).send({ sucess: true, data: users, error: null });
});

// GET USER
router.post((req, res) => {
  console.log("------user create------");
});

// UPDATE USER
router.post((req, res) => {
  console.log("------user create------");
});

// DELETE USER
router.post((req, res) => {
  console.log("------user create------");
});

export default router;
