export const getCurrentDate = () => {
  let currentDate = new Date();

  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
    seconds: currentDate.getSeconds(),
  };
};

export type Event = {
  title: string;
  date: string;
  time: string;
  link: string | null | undefined;
};

export type Person = {
  display: string;
  phoneNumber: string;
  events: Event[];
};

export interface BothPeople {
  sarah: Person;
  stephen: Person;
}

export const generateMessage = (
  who: Person,
  what: string,
  when: { month: number; day: number; hour: number; minute: number }
) => {
  return `${who.display.toUpperCase()} - You have a ${what} event at ${
    when.month + 1
  }/${when.day} - ${when.hour > 12 ? when.hour - 12 : when.hour}:${
    when.minute
  }`;
};

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
