import { defineField } from 'sanity';

export const TimeSchema = {
  name: 'timeType',
  title: 'Time',
  type: 'object',
  fields: [
    defineField({
      name: 'hour',
      title: 'Hour',
      type: 'string',
      options: {
        list: Array.from({ length: 12 }, (_, i) => ({
          title: `${i + 1}`,
          value: `${i + 1}`,
        })),
      },
    }),
    defineField({
      name: 'minute',
      title: 'Minute',
      type: 'string',
      options: {
        list: Array.from({ length: 60 }, (_, idx) => {
          const value = idx.toString().padStart(2, '0');
          return { title: value, value };
        }),
      },
    }),
    defineField({
      name: 'time_of_day',
      title: 'Time of Day',
      type: 'string',
      options: {
        list: [
          { title: 'AM', value: 'AM' },
          { title: 'PM', value: 'PM' },
        ],
      },
    }),
  ],
};
