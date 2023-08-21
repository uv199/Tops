import express from "express";
import User from "../models/user";

const userRouter = express.Router();

// Get ALl User
userRouter.get("/getAll", (req, res) => {
  User.find({}).then((resData) => {
    if (resData.length > 0) {
      res.send({ status: "200", data: resData })
    } else {
      throw new Error("Data not found")
    }
  }).catch((err) => {
    res.send({ status: "400", mesage: err.message })
  })
})

// Get User By Id
// have to pass id in params
userRouter.get("/getUserById/:id", async (req, res) => {
  let id = req?.params?.id
  try {
    let matchUser = await User.findById(id)
    console.log(" matchUser:", matchUser)
    if (matchUser) {
      res.send({ status: 200, data: matchUser })
    } else {
      res.send("Data not found...!")

    }
  } catch (error) {
    res.send({ status: "400", mesage: err.message })
  }
})

// Create user 
userRouter.post("/create", (req, res) => {
  let input = req?.body
  User.create(input).then((resData) => {
    res.send({ status: 200, data: resData })
  }).catch((err) => {
    res.send({ status: 400, message: err.message })
  })
})

// Update User
userRouter.put(`/update/:id`, (req, res) => {
  let id = req?.params?.id
  let data = req?.body
  User.findByIdAndUpdate(id, {
	 "name": "sanket1",
  "email": "sanket1@gmail.com",
	"address": {
			"add": "A/308 tapti avenue",
			"city": "Surat"
	}
}, { new: true }).then((resData) => {
    res.send({ status: 200, data: resData })
  }).catch((err) => {
    res.send({ status: 400, message: err.message })
  })
})
export default userRouter
