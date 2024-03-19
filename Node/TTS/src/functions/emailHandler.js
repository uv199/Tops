import nodemailer from "nodemailer";
import ejs from "ejs";

let transpoter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "arielle.wintheiser67@ethereal.email",
    pass: "zU4wsdHZSqZJ2zTbyS",
  },
});

export const sendMail = ({ from, to, subject, text, html }) => {
  transpoter.sendMail({ from, to, subject, text, html });
};
const otpGenerator = () => {
  let str = "1234567890";
  let code = "";
  for (let i = 0; i < 6; i++) {
    let num1 = Math.floor(Math.random() * str.length);
    code += str[num1];
  }
  return code;
};
export const sendOtp = (emails) => {
  console.log("---2--->", emails);
  let path = __dirname + "/emailTemplate/otp.ejs";
  let otp = otpGenerator();
  ejs.renderFile(path, { otp }, (err, res) => {
    let obj = {
      from: "urvish@gmail.com",
      to: emails,
      subject: "otp for login",
      html: res,
    };
    sendMail(obj);
    console.log("otp0", otp);
  });
  return otp;
};
