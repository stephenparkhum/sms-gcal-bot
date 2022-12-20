// BOILERPLATE GARBAGE
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
//
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const testSenderNum = process.env.TEST_SENDER_NUM;
const testUserNum = process.env.TEST_USER_NUM;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "THIS SHIT ACTUALLY WORKS",
    from: `+${testSenderNum}`,
    to: `+${testUserNum}`,
  })
  .then((message) => console.log(message.sid));
