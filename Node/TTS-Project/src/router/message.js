import express from "express";
import { deleteMessage, sendMessage, getAll } from "../controller/message";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/getAll",auth,  getAll);

router.post("/send", auth, sendMessage);

// router.delete("/delete", deleteMessage);

export default router;
