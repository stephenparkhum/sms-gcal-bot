require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

// TEST CREDS
const testSenderNum = process.env.TEST_SENDER_NUM;
const testUserNum = process.env.TEST_USER_NUM;

client.messages
  .create({
    body: "THIS SHIT ACTUALLY WORKS",
    from: `+${testSenderNum}`,
    to: `+${testUserNum}`,
  })
  .then((message) => console.log(message.sid));
