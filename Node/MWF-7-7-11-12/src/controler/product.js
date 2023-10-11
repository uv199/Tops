import { model } from "../models";

export const productByRange = async (req, res) => {
  let val = req?.body;

  let filter = {};
  if (val?.allow?.length > 0) {
    let arr = val.allow.map((e) => {
      return { gender: e };
    });
    filter = { $or: arr };
  }
  if (val?.category?.length > 0) {
    let catObj = val?.category?.map?.((e) => {
      return { category: { $in: [e] } };
    });
    filter = { ...filter, $and: catObj };
  }
  try {
    let data = await model.Product.find(
      filter,
      { gender: 1, category: 1 }
      //   {
      //     $and: [{ price: { $gt: val.gt } }, { price: { $lt: val.lt } }],
      //   },
      //   { price: 1, title: 1 }
    );
    res.send({ status: 200, data });
  } catch (error) {
    res.send({ status: 400, message: error.message });
  }
};
export const getAll = async (req, res) => {
  console.log("------");
  try {
    let data = await model.Product.find({});
    res.send({ status: 200, data });
  } catch (error) {
    res.send({ status: 400, message: error.message });
  }
};

export const createProduct = (req, res) => {
  model.Product.create(req?.body)
    .then((resData) => {
      console.log("resData", resData);
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const getById = (req, res) => {
  model.Product.findById(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const updateProduct = (req, res) => {
  model.Product.findByIdAndUpdate(req?.params?.id, req?.body, { new: true })
    .then((resData) => {
      res.send({ status: 200, data: resData });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};

export const deleteProduct = (req, res) => {
  console.log("req?.params?.id", req?.params?.id);
  model.Product.findByIdAndRemove(req?.params?.id)
    .then((resData) => {
      res.send({ status: 200, message: "Delete successFully...!" });
    })
    .catch((err) => {
      res.send({ status: 400, message: err.message });
    });
};
