import { SanityAttendanceTypes, SanityDaysOfTheWeekTypes } from '@/data/types';
import { defineField, defineType } from 'sanity';

export const MeetingDetailsSchema = defineType({
  name: 'meetingDetails',
  title: 'Meeting Details',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      options: { list: SanityDaysOfTheWeekTypes },
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'Example: 7:00 PM',
      validation: (Rule) =>
        Rule.required().regex(/^(0?[1-9]|1[0-2]):[0-5][0-9]\s(AM|PM)$/i, {
          name: '12-hour time',
        }),
    }),
    defineField({
      name: 'attendance_type',
      title: 'Attendance Type',
      type: 'string',
      options: { list: SanityAttendanceTypes },
    }),
  ],
});
