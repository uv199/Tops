import express, { Router } from "express";

const router = express.Router();

router.get("/getAll", (req, res) => {
  // get all user
});
router.get("/getById/:id", (req, res) => {
  // get user by id
});
router.get("/signin", (req, res) => {
  // get user by email
});

router.post("/register", (req, res) => {
  // create a new user
});

router.put("/update/:id", (req, res) => {
  // update a user by id
});

router.delete("/delete/:id", (req, res) => {
  // delete a user by id
});

export default router;
