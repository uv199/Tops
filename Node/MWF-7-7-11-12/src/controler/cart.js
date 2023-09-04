import { model } from "../models";


export const getall = (req, res) => {
    model.Cart.find({}).populate([{ path: "userId", select: { name: 1 } }, { path: "products.productId", select: { name: 1, userId: 1 }, populate: [{ path: "userId", select: { name: 1 } }] }])
        .then((resData) => {
            res.send({ status: 200, data: resData });
        })
        .catch((err) => {
            res.send({ status: 400, message: err.message });
        });
}


export const create = (req, res) => {
    model.Cart.create(req?.body)
        .then((resData) => {
            res.send({ status: 200, data: resData });
        })
        .catch((err) => {
            res.send({ status: 400, message: err.message });
        });
}


export const update = (req, res) => {
    model.Cart.findByIdAndUpdate(req?.params?.id, req?.body, { new: true }).then((resData) => {
        res.send({ status: 200, data: resData })
    }).catch((err) => {
        res.send({ status: 400, message: err.message })
    })
}


export const remove = (req, res) => {
    model.Cart.findByIdAndRemove(req?.params?.id).then((resData) => {
        res.send({ status: 200, message: "Delete successFully...!" })
    }).catch((err) => {
        res.send({ status: 400, message: err.message })
    })
}
