import express from "express";
import {
  sendRequest,
  requestHandler,
  getPendingRequest,
  getFollower,
} from "../controller/follower";
import { adminAuth, auth } from "../middleware/auth";

const router = express.Router();

router.get("/get-follow-request", auth, getPendingRequest);

router.get("/accept-reject", auth, requestHandler);

router.post("/send-request", auth, sendRequest);

router.get("/get-follower", getFollower);

export default router;
