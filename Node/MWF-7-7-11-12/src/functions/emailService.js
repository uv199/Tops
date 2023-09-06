import nodeMailer from "nodemailer";

export const emilaService = (data) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "wellington.olson50@ethereal.email",
      pass: "MNPzHRDP8GSxnrEmXx",
    },
  });

  return transporter.sendMail({
    from: "test@gmail.com",
    to: data.to,
    subject: data.subject,
    text: data.text,
  });
};
