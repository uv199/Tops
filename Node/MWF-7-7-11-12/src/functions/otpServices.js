const client = require("twilio")(
  "AC3656cd472486d9c05973193d158b135b",
  "6dabf90d0a5011e63af667a881efafba"
);
client.messages
  .create({
    body: "your otp is 9999999",
    from: "+12512374821",
    to: "+917575083084",
  })
  .then((message) => console.log(message.sid))
//   .done();
