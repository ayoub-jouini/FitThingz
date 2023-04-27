import { v2 as cloudinary } from "cloudinary";
import vars from "./vars";

cloudinary.config({
  cloud_name: vars.cloudinaryName,
  api_key: vars.cloudinaryApiKey,
  api_secret: vars.cloudinaryApiSecret,
  secure: true,
});

export default cloudinary;
