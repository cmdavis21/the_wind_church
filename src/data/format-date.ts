import { format } from 'date-fns';

export const formatDateMMMddyyyy = (d?: Date | string | null) => {
  let date = d;
  if (typeof d === 'string') date = new Date(d);
  if (typeof date !== 'string') {
    return date && date.getFullYear() !== 9999 ? format(date, 'MMM dd, yyyy') : '';
  }
  return '';
};
