import express from "express";
import { model } from "../models";

const wishListRouter = express.Router();

wishListRouter.post("/create", (req, res) => {
    model.WishList.create(req?.body)
        .then((resData) => {
            res.send({ status: 200, data: resData });
        })
        .catch((err) => {
            res.send({ status: 400, message: err.message });
        });
});

wishListRouter.get("/getWishListById/:id", (req, res) => {
    model.WishList.findById(req?.params?.id)
        .then((resData) => {
            res.send({ status: 200, data: resData });
        })
        .catch((err) => {
            res.send({ status: 400, message: err.message });
        });
});

wishListRouter.put("/update/:id", (req, res) => {
    model.WishList.findByIdAndUpdate(req?.params?.id, req?.body, { new: true }).then((resData) => {
        res.send({ status: 200, data: resData })
    }).catch((err) => {
        res.send({ status: 400, message: err.message })
    })
})

wishListRouter.delete("/delete/:id", (req, res) => {
    model.WishList.findByIdAndRemove(req?.params?.id).then((resData) => {
        res.send({ status: 200, message: "Delete successFully...!" })
    }).catch((err) => {
        res.send({ status: 400, message: err.message })
    })
})


export default wishListRouter
