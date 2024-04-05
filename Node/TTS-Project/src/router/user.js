import express from "express";
import { modals } from "../model";

const router = express.Router();

router.post("/signup", async (req, res) => {
  let input = req.body;
  try {
    const match = modals.findOne({
      $or: [{ email: input.email }, { contactNo: input.contactNo }],
    });

    if (match) return new Error({ message: "email or password are used" });

    let user = await modals.User.create(input);

    res.status(200).send({
      success: true,
      data: user,
      token: "",
      message: "User create successfully",
    });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, data: null, message: error.message });
  }
  modals.create(input);
});

/*


{email:"",phone:""}

or = [{email:""},{phone:""}]
    
    */
