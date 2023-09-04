import express from "express";
import { model } from "../models";

const orderRouter = express.Router();

orderRouter.post("/create", (req, res) => {
    model.Order.create(req?.body)
        .then((resData) => {
            res.send({ status: 200, data: resData });
        })
        .catch((err) => {
            res.send({ status: 400, message: err.message });
        });
});

orderRouter.get("/getOrderById/:id", (req, res) => {
    model.Order.findById(req?.params?.id)
        .then((resData) => {
            res.send({ status: 200, data: resData });
        })
        .catch((err) => {
            res.send({ status: 400, message: err.message });
        });
});

orderRouter.put("/update/:id", (req, res) => {
    model.Order.findByIdAndUpdate(req?.params?.id, req?.body, { new: true }).then((resData) => {
        res.send({ status: 200, data: resData })
    }).catch((err) => {
        res.send({ status: 400, message: err.message })
    })
})

orderRouter.delete("/delete/:id", (req, res) => {
    model.Order.findByIdAndRemove(req?.params?.id).then((resData) => {
        res.send({ status: 200, message: "Delete successFully...!" })
    }).catch((err) => {
        res.send({ status: 400, message: err.message })
    })
})


export default orderRouter
