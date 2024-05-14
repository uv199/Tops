import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dec6sfy4i",
  api_key: "936994176136521",
  api_secret: "B8vM0GoPoQg1emY5XaQOMTiEmMc",
});

export const imageUpload = (url) => {
  cloudinary.uploader.upload("./src/images/download.jpg").then((result) => {
    return result.secure_url;
  });
};
