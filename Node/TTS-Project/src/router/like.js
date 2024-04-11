import express from "express";
import { LikeDisLike } from "../controller/like";
import { auth } from "../middleware/auth";

const router = express.Router();

// router.get("/get-all", getAll);

// router.get("/getByUser", auth, getByUser);

router.post("/like-dislike", auth, LikeDisLike);

// router.delete("/delete/:id", auth, remove);

export default router;
