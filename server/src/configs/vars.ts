import * as dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  url: process.env.URL,
  db: process.env.DB_URL,
  frontURL: process.env.FRONT_URL,

  accessSecret: process.env.SECRET_ACCESS_TOKEN,
  refreshSecret: process.env.SECRET_REFRESH_TOKEN,
  passwordSecret: process.env.SECRET_PASSWORD_TOKEN,
  emailSecret: process.env.SECRET_EMAIL_TOKEN,

  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,

  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_SECRET,
};
