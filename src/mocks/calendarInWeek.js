import { getThisWeekDates, formatDate } from "../utils/tool";
const dayList = getThisWeekDates();

export const exerciseItem = {
  title: "CHEST DAY -  WITH ARM",
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
        item: [exerciseItem, exerciseItem],
      },
    ],
  },
  {
    id: dayList[2],
    title: formatDate(dayList[2], "ddd"),
    date: dayList[2]?.split("-")?.[2],
    exercises: [
      {
        title: "CHEST DAY -  WITH ARM",
        item: [exerciseItem, exerciseItem],
      },
      {
        title: "CHEST DAY -  WITH ARM",
        item: [exerciseItem, exerciseItem],
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
