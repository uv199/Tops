import nodeMailer from "nodemailer";

export const emailService = (data) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: "test@gmail.com",
    to: data.to,
    subject: data.subject,
    text: data.text,
  });
};
