import { model } from "../models";

export const getall = (req, res) => {
  model.Cart.find({})
    .populate([
      { path: "userId", select: { name: 1 } },
      {
        path: "products.productId",
        select: { name: 1, userId: 1 },
        populate: [{ path: "userId", select: { name: 1 } }],
      },
    ])
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const create = async (req, res) => {
  let matchData = await model.Cart.findOne({ userId: req?.loginUser?.id });
  //   if (matchData) {
  //     const products = [];
  //     req?.body?.products?.map?.((e) => {
  //       let findData = matchData?.products?.find?.(
  //         (me) => me?.productId === e?.productId
  //       );
  //       if (findData)
  //         products.push({ ...findData, count: findData.count + e?.count });
  //       else products.push(e);
  //     });
  //     matchData.products = products;
  //     await matchData.save();
  //     res.send({ status: 200, data: matchData });
  //   } else {
  model.Cart.update(
    { userId: req?.loginUser?.id },
    { ...req?.body, userId: req?.loginUser?.id },
    { upsert: true }
  )
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
  //   }
};

export const update = (req, res) => {
  model.Cart.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const remove = (req, res) => {
  model.Cart.findByIdAndRemove(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, message: "Delete successFully...!" });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};
