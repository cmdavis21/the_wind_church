import LinkIcon from '@/components/icons/link';
import { defineField } from 'sanity';

export const MinistryConnectionSchema = {
  name: 'ministryConnection',
  title: 'Ministry Connections',
  type: 'document',
  icon: LinkIcon,
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
