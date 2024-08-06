 import twilio from "twilio";

const accountSid = "AC3656cd472486d9c05973193d158b135b";
const authToken = "e3edcd69371e9d50bf5193dec6538715";
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+17209031788",
    to: "+916354837097",
  });

  console.log(message.body);
}

createMessage();