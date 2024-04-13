import express from "express";
import {
  sendRequest,
  requestHandler,
  getPendingRequest,
} from "../controller/follower";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/get-follow-request", auth, getPendingRequest);

router.get("/accept-reject", auth, requestHandler);

router.post("/send-request", auth, sendRequest);

// router.delete("/delete/:id", auth, remove);

export default router;
