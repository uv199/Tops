import nodemailer from "nodemailer";

let transpoter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "reyna.ferry1@ethereal.email",
    pass: "y4XrE83MbQHgQtUvR8",
  },
});

export const sendMail = () => {
  transpoter.sendMail({
    from: "abc.123@gmail.com",
    to: "user@gmail.com",
    subject: "Welcome Message ✔",
    text: "Hello world? User Welcome to our website",
    html: "<b>Hello world?</b>",
  });
};
