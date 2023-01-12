"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const methods_1 = require("./methods");
const data_1 = require("./data");
const message_1 = require("./message");
const googleConnection_1 = require("./googleConnection");
const schedule = require("node-schedule");
const { authorize, listEvents } = googleConnection_1.methods;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
// TEST CREDS
const testSenderNum = process.env.TEST_SENDER_NUM;
const parseEvents = (events) => {
    console.log(events);
    let allEvents = [];
    for (let i = 0; i < events.length; i++) {
        const { summary, start, end, location } = events[i];
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
        const event = {
            summary: summary,
            start: startTime,
            end: endTime,
            location: location ? location : null,
        };
        allEvents.push(event);
    }
    return allEvents;
};
const sendTestTwilioMsg = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = (0, methods_1.getCurrentDate)();
    console.log(today);
    const events = () => __awaiter(void 0, void 0, void 0, function* () { return yield authorize().then(listEvents).catch(console.error); });
    const formattedEvents = parseEvents(events);
    console.log(formattedEvents);
    const { month, day, hour, minute } = today;
    const textSP = (0, methods_1.generateMessage)(data_1.receivers.stephen, "TEST STEPHEN EVENT", {
        month,
        day,
        hour,
        minute,
    });
    const textSB = (0, methods_1.generateMessage)(data_1.receivers.sarah, "TEST SARAH EVENT", {
        month,
        day,
        hour,
        minute,
    });
    schedule.scheduleJob(`0 33 ${hour} * * *`, (fireDate) => {
        console.log(`This ran at ${fireDate}`);
        (0, message_1.sendTestMessage)(testSenderNum, client, textSP, data_1.receivers.stephen.phoneNumber);
        (0, message_1.sendTestMessage)(testSenderNum, client, textSB, data_1.receivers.sarah.phoneNumber);
    });
});
sendTestTwilioMsg();
