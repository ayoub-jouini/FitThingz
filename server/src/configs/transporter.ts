import nodemailer from "nodemailer";
import vars from "./vars";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: vars.email,
    pass: vars.emailPassword,
  },
});

export default transporter;
