import express from "express";
import { create, remove, getByUser, getAll } from "../controller/post";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/get-all", getAll);

router.get("/getByUser", auth, getByUser);

router.post("/create", auth, create);

router.delete("/delete/:id", auth, remove);

export default router;
