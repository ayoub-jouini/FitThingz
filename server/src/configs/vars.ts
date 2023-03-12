import * as dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  url: process.env.URL,
  accessSecret: process.env.SECRET_ACCESS_TOKEN,
  refreshSecret: process.env.SECRET_REFRESH_TOKEN,
  emailSecret: process.env.SECRET_EMAIL_TOKEN,
  db: process.env.DB_URL,
  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
  frontURL: process.env.FRONT_URL,
};
