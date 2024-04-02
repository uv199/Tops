// import { emailService } from "./emailService";

const client = require("twilio")(
  process.env.TWILIO_KEY,
  process.env.TWILIO_TOKEN
);
console.log("-----------  client----------->", client);

const sendOTP = (user) => {
  const otp = Math.trunc(Math.random() * 1000000);
  client.messages
    .create({
      body: `your otp is ${otp}`,
      from: "+12563804266",
      to: `+91${user.number || 7048324593}`,
    })
    .then((message) => {});
  return otp;
};
//   .done();
sendOTP({ number: "7575083084" });
