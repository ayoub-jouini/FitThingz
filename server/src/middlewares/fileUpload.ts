import multer from "multer";
import { v1 as uuidv1 } from "uuid";

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload = multer({ dest: "uploads/" });

export default fileUpload;
