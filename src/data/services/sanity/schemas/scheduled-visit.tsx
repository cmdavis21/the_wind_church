import Clock from '@/components/icons/clock';
import { defineField } from 'sanity';

export const ScheduledVisitSchema = {
  name: 'scheduledVisit',
  title: 'Scheduled Visits',
  type: 'document',
  icon: Clock,
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{ type: 'contact' }],
      readOnly: true,
    }),
    defineField({
      name: 'attendance',
      title: 'Attendance',
      type: 'number',
    }),
    defineField({
      name: 'day_of_visit',
      title: 'Day of visit',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      first_name: 'contact.first_name',
      last_name: 'contact.last_name',
    },
    prepare({ first_name, last_name }: { first_name: string; last_name: string }) {
      return {
        title: `${first_name} ${last_name}`,
        media: (
          <span>
            {first_name.charAt(0)}
            {last_name.charAt(0)}
          </span>
        ),
      };
    },
  },
};
