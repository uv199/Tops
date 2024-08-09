import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import hbs from "hbs";
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "vincenzo.lesch42@ethereal.email",
    pass: "kJzTVsDHQJawWSDmkf",
  },
  from: "admin@admin.com",
});

export const sendMailService = async (data) => {
  console.log("🚀 ~ sendMailService ~ data:", data);
  let { to, subject, text } = data;
  let rootPath = path.resolve();
  let filePath = await path.join(
    rootPath,
    "/src/functions/email/templates/sendOtp.hbs"
  );

  let file = fs.readFileSync(filePath, "utf-8");

  let content = hbs.handlebars.compile(file);
  let html = content({ otp: 1234567890 });
  return await transporter.sendMail({
    from: "admin@admin.com",
    to, // to === to:to, if key and value name is same then just write once
    subject,
    text,
    html,
  });
};
