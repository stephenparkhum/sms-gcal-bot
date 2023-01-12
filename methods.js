"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMessage = exports.getCurrentDate = void 0;
const getCurrentDate = () => {
    let currentDate = new Date();
    return {
        day: currentDate.getDate(),
        month: currentDate.getMonth(),
        hour: currentDate.getHours(),
        minute: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
    };
};
exports.getCurrentDate = getCurrentDate;
const generateMessage = (who, what, location, when) => {
    return `${who.display.toUpperCase()} - You have the ${what} event at ${when.month + 1}/${when.day} - ${when.hour > 12 ? when.hour - 12 : when.hour}:${when.minute} ${location ? location : ""}`;
};
exports.generateMessage = generateMessage;
// Get all the stuff at midnight
/* const getEventsAtTheStartOfEachDay = schedule.scheduleJob("1 45 14 * * *", () =>
  testMessage()
);
*/
// MIDNIGHT RUN
// const getAllEventsEachDay = schedule.scheduleJob("1 1 0 * * *", () => testMessage());
// @TODO #1
// Add "midnight" gathering of calendar events
// const job = schedule.scheduleJob("32 * * * *", () => testMessage());
// @TODO #2
// Add scheduling of each calendar event
