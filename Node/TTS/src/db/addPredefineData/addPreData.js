import { modal } from "../../model";
import productData from "./productData.json";
export const addPreData = () => {
  addAdmin();
  addProduct();
};
export const addAdmin = async () => {
  try {
    const matchUser = await modal.User.findOne({
      email: "admin@admin.com",
      userType: "admin",
    });
    if (!matchUser) {
      modal.User.create({ email: "admin@admin.com", password: "123456" });
      console.log("Admin created...!");
    }
  } catch (error) {
    console.log("----error while admin create ----", error);
  }
};

export const addProduct = async () => {
  const count = await modal.Product.countDocuments();
  console.log("-----------  count----------->", count);
  if (count === 0) {
    modal.Product.create(productData)
      .then((res) => {
        console.log("-----------  res----------->", res);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }
};
