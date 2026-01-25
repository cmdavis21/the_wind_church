import { formatDateMMMddyyyy } from '@/data/format-date';
import { defineField } from 'sanity';

export const MinistryConnectionSchema = {
  name: 'ministryConnection',
  title: 'Ministry Connections',
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
      name: 'ministry_interests',
      title: 'Ministry Interests',
      type: 'array',
      of: [{ type: 'string' }],
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
