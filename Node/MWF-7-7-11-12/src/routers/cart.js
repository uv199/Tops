import express from "express";
import { create, getall, remove, update } from "../controler/cart";
import { authorized } from "../auth";

const cartRouter = express.Router();

cartRouter.post("/create", authorized, create);

cartRouter.get("/getAll", getall);

cartRouter.put("/update/:id", update)

cartRouter.delete("/delete/:id", remove)


export default cartRouter
