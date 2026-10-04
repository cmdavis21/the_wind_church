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
      options: {
        list: [
          { title: 'Sunday', value: 'Sunday' },
          { title: 'Monday', value: 'Monday' },
          { title: 'Tuesday', value: 'Tuesday' },
          { title: 'Wednesday', value: 'Wednesday' },
          { title: 'Thursday', value: 'Thursday' },
          { title: 'Friday', value: 'Friday' },
          { title: 'Saturday', value: 'Saturday' },
        ],
      },
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'timeType',
    }),
    defineField({
      name: 'attendance_type',
      title: 'Attendance Type',
      type: 'string',
      options: {
        list: [
          { title: 'In-Person', value: 'In-Person' },
          { title: 'Online', value: 'Online' },
          {
            title: 'In-person and Online',
            value: 'In-person and Online',
          },
        ],
      },
    }),
  ],
});
