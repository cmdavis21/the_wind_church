import { defineField } from 'sanity';

import { YesNo } from '@/data/types';

export const PrayerRequestSchema = {
  name: 'prayerRequest',
  title: 'Prayer Requests',
  type: 'document',
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{ type: 'contact' }],
      readOnly: true,
    }),
    defineField({
      name: 'request_email_back',
      title: 'Requested Email Back',
      type: 'string',
      options: {
        list: [
          { title: 'Yes', value: YesNo.YES },
          { title: 'No', value: YesNo.NO },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'request',
      title: 'Request',
      type: 'text',
      readOnly: true,
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
