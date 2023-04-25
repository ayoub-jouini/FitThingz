import multer from "multer";
import { v1 as uuidv1 } from "uuid";

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      //@ts-ignore
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuidv1() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    //@ts-ignore

    // const isValid = !!MIME_TYPE_MAP[file.mimetype];
    // let error = isValid ? null : new Error("invalid mime type!");
    //@ts-ignore
    cb(null, null);
    console.log("hello");
  },
});

export default fileUpload;
