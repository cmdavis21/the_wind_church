import { defineField } from 'sanity';

import { YesNo } from '@/data/types';

export const RightnowMediaSchema = {
  name: 'rightnowMedia',
  title: 'Rightnow Media Signups',
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
      name: 'wind_member',
      title: 'Are they a Wind Member?',
      type: 'string',
      options: {
        list: [
          { title: 'Yes', value: YesNo.YES },
          { title: 'No', value: YesNo.NO },
        ],
      },
    }),
    defineField({
      name: 'has_access',
      title: 'Do they have access to Rightnow Media?',
      type: 'string',
      options: {
        list: [
          { title: 'Yes', value: YesNo.YES },
          { title: 'No', value: YesNo.NO },
        ],
      },
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
