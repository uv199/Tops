import express from "express";
import { create, remove, getByUser, getAll } from "../controller/post";
import { auth } from "../middleware/auth";
import multer from "multer";

const upload = multer({ dest: "./public/data/uploads/" });

app.post(
  "/upload-profile",
  upload.single("uploaded_file"),
  function (req, res) {
    console.log(req.file, req.body);
  }
);

const router = express.Router();

router.get("/get-all", getAll);

router.get("/getByUser", auth, getByUser);

router.post("/create", auth, create);

router.delete("/delete/:id", auth, remove);

router.post("/uploadImg", upload.single("avatar"), (req, res) => {
  console.log("----->", req);
  let url = imageUpload(req.file.url);
  res.status(200).send({ data: url, success: true, message: "" });
});

// multer ->

export default router;
