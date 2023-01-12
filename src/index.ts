require("dotenv").config();
import { getCurrentDate, generateMessage } from "./methods";
import { receivers } from "./data";
import { sendTestMessage } from "./message";
import { methods } from "./googleConnection";
import { CalEvent, ParsedEvent } from "./types";

const schedule = require("node-schedule");

const { authorize, listEvents } = methods;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

// TEST CREDS
const testSenderNum = process.env.TEST_SENDER_NUM;

const parseEvents = (events: CalEvent[] | any) => {
  let allEvents: ParsedEvent[] = [];

  for (let i = 0; i < events.length; i++) {
    const { summary, start, end, location }: CalEvent = events[i];
    const startDate = new Date(start.dateTime);
    const endDate = new Date(end.dateTime);

    let startTime = {
      day: startDate.getDate(),
      month: startDate.getMonth(),
      hour: startDate.getHours(),
      minute: startDate.getMinutes(),
    };

    let endTime = {
      day: endDate.getDate(),
      month: endDate.getMonth(),
      hour: endDate.getHours(),
      minute: endDate.getMinutes(),
    };

    const event: ParsedEvent = {
      summary: summary,
      start: startTime,
      end: endTime,
      location: location ? location : null,
    };

    allEvents.push(event);
  }

  return allEvents;
};

const sendTestTwilioMsg = async () => {
  // const today = getCurrentDate();
  // const { month, day, hour, minute } = today;

  /*
  const textSB = generateMessage(receivers.sarah, "TEST SARAH EVENT", {
    month,
    day,
    hour,
    minute,
  });
  */

  const events = await authorize().then(listEvents).catch(console.error);
  const formattedEvents = parseEvents(events);

  console.log(formattedEvents);

  for (let i = 0; i < events.length; i++) {
    const { summary, start, location } = events[i];
    const { day, month, hour, minute } = start;

    let textSP = generateMessage(receivers.stephen, summary, location, {
      month,
      day,
      hour,
      minute,
    });

    schedule.scheduleJob(
      `0 ${minute} ${hour} ${day} ${month} *`,
      (fireDate: any) => {
        console.log(`This ran at ${fireDate}`);
        sendTestMessage(
          testSenderNum,
          client,
          textSP,
          receivers.stephen.phoneNumber
        );
      }
    );
  }
};

const midnightRun = () => {
  const rule = new schedule.RecurrenceRule();

  rule.hour = 0;
  rule.minute = 0;

  schedule.scheduleJob(rule, function () {
    console.log("Job running at 12am");
    sendTestTwilioMsg();
  });
};

midnightRun();
