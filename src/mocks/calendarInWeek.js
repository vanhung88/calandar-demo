import { getThisWeekDates, formatDate } from "../utils/tool";
const dayList = getThisWeekDates();

export const exerciseItem = {
  title: "Bench Press Medium Grip",
  quantity: "3x",
  description: "50 ib x5, 60n ibx90, 70kax90i",
};

export const calendarInWeek = [
  {
    id: dayList[0],
    title: formatDate(dayList[0], "ddd"),
    date: dayList[0]?.split("-")?.[2],
  },
  {
    id: dayList[1],
    title: formatDate(dayList[1], "ddd"),
    date: dayList[1]?.split("-")?.[2],
    exercises: [
      {
        title: "Chest day -  with arm exercise",
        workouts: [
          {
            title: "Bench Press Medium Grip",
            quantity: "3x",
            description: "50 lb x 5, 60 lb x 5, 70 lb x 5",
          },
          {
            title: "Exercise B",
            quantity: "1x",
            description: "40 lb x 10",
          },
        ],
      },
    ],
  },
  {
    id: dayList[2],
    title: formatDate(dayList[2], "ddd"),
    date: dayList[2]?.split("-")?.[2],
    exercises: [
      {
        title: "Leg DaY",
        workouts: [exerciseItem, exerciseItem],
      },
      {
        title: "Arm day",
        workouts: [exerciseItem, exerciseItem],
      },
    ],
  },
  {
    id: dayList[3],
    title: formatDate(dayList[3], "ddd"),
    date: dayList[3]?.split("-")?.[2],
  },
  {
    id: dayList[4],
    title: formatDate(dayList[4], "ddd"),
    date: dayList[4]?.split("-")?.[2],
  },
  {
    id: dayList[5],
    title: formatDate(dayList[5], "ddd"),
    date: dayList[5]?.split("-")?.[2],
  },
  {
    id: dayList[6],
    title: formatDate(dayList[6], "ddd"),
    date: dayList[6]?.split("-")?.[2],
  },
];
