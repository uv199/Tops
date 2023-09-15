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
