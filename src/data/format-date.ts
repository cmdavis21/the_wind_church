import { format, isValid } from 'date-fns';

export const formatDateMMMddyyyy = (d?: Date | string | null) => {
  if (!d) return '';
  const date = typeof d === 'string' ? new Date(d) : d;
  if (!isValid(date)) return '';
  return format(date, 'MMM dd, yyyy');
};

export const formatTimeHmm = (d?: Date | string | null) => {
  if (!d) return '';
  const date = typeof d === 'string' ? new Date(d) : d;
  if (!isValid(date)) return '';
  return format(date, 'h:mm a');
};
