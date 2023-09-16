import dayjs from 'dayjs';

export const formatDate = (time, type = 'YYYY-MM-DD') =>
  dayjs(time).format(type);

export const getThisWeekDates = (time) => {
  if (formatDate(time, 'dddd') === 'Sunday') {
    time = formatDate(dayjs(time).subtract(1, 'day'));
  }
  var weekDates = [];
  for (var i = 1; i <= 7; i++) {
    const date = dayjs(time).day(i);
    weekDates.push(formatDate(date));
  }
  return weekDates;
};
