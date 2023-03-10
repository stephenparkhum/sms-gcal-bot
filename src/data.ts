import { BothPeople } from "./methods";
import { getCurrentDate, generateMessage } from "./methods";

export const receivers: BothPeople = {
  sarah: {
    display: "Sarah",
    phoneNumber: `5419134804`,
    events: [
      {
        title: "Sarah Event #1 (TEST)",
        date: "12/23/2022",
        time: "11",
        link: null,
      },
      {
        title: "Sarah Event #2 (TEST)",
        date: "12/23/2022",
        time: "11",
        link: null,
      },
    ],
  },
  stephen: {
    display: "Stephen",
    phoneNumber: `5413599915`,
    events: [
      {
        title: "Stephen Event #1 (TEST)",
        date: "12/23/22",
        time: "12",
        link: null,
      },
    ],
  },
};
