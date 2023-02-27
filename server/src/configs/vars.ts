import * as dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  url: process.env.URL,
  secret: process.env.SECRET_TOKEN,
  db: process.env.DB_URL,
};
