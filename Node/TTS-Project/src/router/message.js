import express from "express";
import { deleteMessage, sendMessage, getMessage } from "../controller/message";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/getAll", auth, getMessage);

router.post("/send", auth, sendMessage);

router.delete("/delete", deleteMessage);

export default router;
