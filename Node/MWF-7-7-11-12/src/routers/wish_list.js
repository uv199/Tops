import express from "express";
import { model } from "../models";
import {
  createWishlist,
  getByUserId,
  updateWishlist,
} from "../controler/wishlist";
import { authorized } from "../auth";

const wishListRouter = express.Router();

wishListRouter.post("/create", authorized, createWishlist);

wishListRouter.get("/getByUserId", authorized, getByUserId);

wishListRouter.put("/update", authorized, updateWishlist);

export default wishListRouter;
