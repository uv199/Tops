import express from "express";
import { register } from "../controller/user.js";

const router = new express.Router();

router.post("/create", register);
