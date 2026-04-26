import { defineField } from 'sanity';

import { formatDateMMMddyyyy } from '@/data/format-date';
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
      created: '_createdAt',
    },
    prepare({
      first_name,
      last_name,
      created,
    }: {
      first_name: string;
      last_name: string;
      created: string;
    }) {
      return {
        title: `${first_name} ${last_name}`,
        subtitle: `Submitted: ${formatDateMMMddyyyy(created)}`,
        media: (
          <span>
            {first_name.charAt(0).toUpperCase()}
            {last_name.charAt(0).toUpperCase()}
          </span>
        ),
      };
    },
  },
};
