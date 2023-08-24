import express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken"
import bycrypt from "bcrypt"

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

userRouter.post("/signin", async (req, res) => {
  let { email, password } = req?.body
  try {
    const matchUser = await User.findOne({ email })
    if (matchUser) {
      let isMatchPass = await bycrypt.compare(password, matchUser.password)
      if (!isMatchPass) {
        res.send("email or password not match....!")
      } else {
        let token = jwt.sign({ email: matchUser.email, city: "stu" }, "12345teghsg")
        res.send({ status: 200, data: matchUser, token })
      }
    } else {
      res.send("Match user not found....!")
    }

  } catch (error) {

    res.send({ status: 400, error: error.mesage })
  }
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
userRouter.post("/create", async (req, res) => {
  let input = req?.body
  input.password = await bycrypt.hash(input?.password, 8)
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
  if (data.address) {
    for (const key in data.address) {
      data[`address.${key}`] = data.address[key]
    }
    delete data.address
  }

  User.findByIdAndUpdate(id, data, { new: true }).then((resData) => {
    res.send({ status: 200, data: resData })
  }).catch((err) => {
    res.send({ status: 400, message: err.message })
  })
})


export default userRouter


// let x = {
//   a: 30,
//   b: 30,
// }
// let x = {
//   a: { test: "test" },
//   b: 30,
// }
