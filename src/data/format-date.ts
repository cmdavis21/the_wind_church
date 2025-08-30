import { format } from 'date-fns';

// export const formatDate = (d?: Date | string | null) => {
//   let date = d;
//   if (typeof d === "string")
//     date = new Date(`${d.replace(/T.*/, "")}T00:00:00`);
//   return date ? format(date, "yyyy-MM-dd") : undefined;
// };

export const formatDateMMMddyyyy = (d?: Date | string | null) => {
  let date = d;
  if (typeof d === 'string') date = new Date(d);
  if (typeof date !== 'string')
    return date && date.getFullYear() !== 9999
      ? format(date, 'MMM dd, yyyy')
      : '';
  return '';
};

export const formatDateMMMddyyyyHHmm = (d?: Date | string | null) => {
  let date = d;
  if (typeof d === 'string') date = new Date(d);
  if (typeof date !== 'string')
    return date && date.getFullYear() !== 9999
      ? format(date, 'yyyy-MM-dd HH:mm')
      : '-';
  return '';
};

export const formatDateMMMddyyyyHHmmss = (d?: Date | string | null) => {
  let date = d;
  if (typeof d === 'string') date = new Date(d);
  if (typeof date !== 'string')
    return date && date.getFullYear() !== 9999
      ? format(date, 'yyyy-MM-dd HH:mm:ss')
      : '-';
  return '';
};

export const getLastSunday = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const lastSunday = new Date(now);
  lastSunday.setDate(now.getDate() - dayOfWeek); // Go back to Sunday
  lastSunday.setHours(0, 0, 0, 0); // Set time to midnight
  return lastSunday;
};

export const getNextSundayAt9AM = () => {
  const now = new Date();
  const nextSunday = new Date(now);
  const dayOfWeek = nextSunday.getDay();
  const daysUntilSunday = (7 - dayOfWeek) % 7; // Days left until Sunday
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  nextSunday.setHours(9, 0, 0, 0); // Set time to 9:00 AM

  return nextSunday.getTime();
};

export const getNextSundayAt11AM = () => {
  const nextSunday = getNextSundayAt9AM(); // Start from Sunday 9:00 AM
  return nextSunday + 2 * 60 * 60 * 1000; // Add 2 hours to get Sunday 11:00 AM
};

export const activateWatchLive = (): boolean => {
  const now = Date.now();
  const start = getNextSundayAt9AM();
  const end = getNextSundayAt11AM();
  // Check if the current time is between Sunday 9:00 AM and 11:00 AM
  return now >= start && now <= end;
};

export const isTodaySunday = (): boolean => {
  let todayIsSunday = false;
  const now = new Date();
  const dayOfWeek = now.getDay();
  if (dayOfWeek === 0) {
    todayIsSunday = true;
  } else {
    todayIsSunday = false;
  }
  return todayIsSunday;
};
