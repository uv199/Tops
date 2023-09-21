import express from "express";
import { model } from "../models";
import {
  createWishlist,
  getByUserId,
  updateWishlist,
} from "../controler/wishlist";

const wishListRouter = express.Router();

wishListRouter.post("/create", createWishlist);

wishListRouter.get("/getWishListById/:id", getByUserId);

wishListRouter.put("/update/:id", updateWishlist);

export default wishListRouter;
