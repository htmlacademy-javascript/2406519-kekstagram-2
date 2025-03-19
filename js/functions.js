const CURRENT_DATE = new Date();
const YEAR = CURRENT_DATE.getFullYear();
const MONTH = CURRENT_DATE.getMonth();
const DAY = CURRENT_DATE.getDate();

const getDate = (string) => {
  const [hours, minutes] = string.split(':');
  return new Date(YEAR, MONTH, DAY, Number(hours), Number(minutes));
};

const isMeetingInWorkday = (dayStart, dayEnd, meetStart, meetDuration) => {
  const dayStartTime = getDate(dayStart).getTime();
  const dayEndTime = getDate(dayEnd).getTime();
  const meetStartTime = getDate(meetStart).getTime();
  const meetEndTime = meetStartTime + meetDuration * 60_000;

  return meetEndTime >= dayStartTime && meetEndTime <= dayEndTime;
};

/* eslint-disable no-console */
console.log(isMeetingInWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingInWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingInWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingInWorkday('14:00', '17:30', '08:0', 90));
console.log(isMeetingInWorkday('8:00', '17:30', '08:00', 900));
