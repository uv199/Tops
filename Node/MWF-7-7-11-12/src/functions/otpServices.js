import { emailService } from "./emailService";

const client = require("twilio")(
  process.env.TWILIO_KEY,
  process.env.TWILIO_TOKEN
);

export const sendOTP = (user) => {
  const otp = Math.trunc(Math.random() * 1000000);
  client.messages
    .create({
      body: `your otp is ${otp}`,
      from: "+12512374821",
      to: `+91${user.number}`,
    })
    .then((message) => {
      emailService({
        to: user.email,
        subject: "OTP for login",
        text: `your one time password is ${otp}`,
      });
    });
    return otp;
};
//   .done();
