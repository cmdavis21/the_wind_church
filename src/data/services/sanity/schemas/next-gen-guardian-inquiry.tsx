import { formatDateMMMddyyyy } from '@/data/format-date';
import { defineField } from 'sanity';

export const NextGenGuardianInquirySchema = {
  name: 'nextGenGuardianInquiry',
  title: 'Next Gen Guardian Inquiry',
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
      name: 'questions',
      title: 'Questions',
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
