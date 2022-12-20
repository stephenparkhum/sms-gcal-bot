require("dotenv").config();

const schedule = require("node-schedule");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

// TEST CREDS
const testSenderNum = process.env.TEST_SENDER_NUM;
const testUserNum = process.env.TEST_USER_NUM;

const testMessage = () => {
  console.log("This message is running now...");
};

// Get all the stuff at midnight
const job = schedule.scheduleJob("32 * * * *", () => testMessage());

// @TODO #1
// Add "midnight" gathering of calendar events

// @TODO #2
// Add scheduling of each calendar event

/* client.messages
  .create({
    body: "THIS SHIT ACTUALLY WORKS",
    from: `+${testSenderNum}`,
    to: `+${testUserNum}`,
  })
  .then((message) => console.log(message.sid));
*/
