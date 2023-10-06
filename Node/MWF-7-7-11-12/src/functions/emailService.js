import nodeMailer from "nodemailer";
import ejs from "ejs";

const transporter = nodeMailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export const emailService = (data) => {
  return transporter.sendMail({
    from: "test@gmail.com",
    to: data.to,
    subject: data.subject,
    text: data.text,
  });
};

export const sendEmailTemp = () => {
  ejs.renderFile(
    __dirname + "/emailTemplet/welcom.ejs",
    {
      age: 12,
      content: " hello welcome to web",
      content2: " hello welcome to web",
      receiver: "Sonu",
    },
    (err, res) => {
      if (err) console.log("err", err);
      else {
        transporter.sendMail({
          from: "test@gmail.com",
          to: "uv@gmail.com",
          subject: "welcome message",
          html: res,
        });
      }
    }
  );
};
