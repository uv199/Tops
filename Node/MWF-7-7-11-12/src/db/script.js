import { model } from "../models/index";

export const updateOldUser = async () => {
  try {
    let resData = await model.User.find({});

    for (let i = 0; i < resData.length; i++) {
      let data = await model?.User?.findById(resData?.[i]?.id);
      data.address = data?.address;
      await data.save();
    }
  } catch (err) {
    console.log("updateUser-script--->", err.message);
  }
};
