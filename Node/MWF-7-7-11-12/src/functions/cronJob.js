import { model } from "../models";
import { sendOTP } from "./otpServices";
import cron from "node-cron";

export const cronJob = () => {
  console.log("----");
  cron.schedule("*/10 * * * * *", sendReminder);
};

// to send every user to remind pendeing fees 
async function sendReminder() {
    console.log("-----")
  const userArr = await model?.User?.find?.({}, { number: 1, name: 1 });
  console.log("userArr", userArr);
  userArr?.map?.((e) => {
    sendOTP(e);
  });
}
