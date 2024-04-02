const accountSid = "AC3656cd472486d9c05973193d158b135b";
const authToken = "2fd9eeb1c2473e277fb5c8e1280c86f0";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+12563804266",
    to: "+917486917928",
  })
  .then((message) => console.log(message.sid));
