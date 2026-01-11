import { defineField } from 'sanity';

import FileIcon from '@/components/icons/file';
import { YesNo } from '@/data/types';

export const EventRentalSchema = {
  name: 'eventRental',
  title: 'Event Rental Inquiries',
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
      name: 'purpose_for_rental',
      title: 'Purpose for rental',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'describe_your_event',
      title: 'Describe your event',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'company_name',
      title: 'Company Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'company_phone',
      title: 'Company Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'referred',
      title: 'Referred',
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
      name: 'referred_by',
      title: 'Referred by',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      first_name: 'contact.first_name',
      last_name: 'contact.last_name',
      purpose_for_rental: 'purpose_for_rental',
    },
    prepare({
      first_name,
      last_name,
      purpose_for_rental,
    }: {
      first_name: string;
      last_name: string;
      purpose_for_rental: string;
    }) {
      return {
        title: !purpose_for_rental.includes('Other') ? purpose_for_rental : 'Event Rental Request',
        subtitle: `${first_name ?? ''} ${last_name ?? ''}`,
        media: <FileIcon />,
      };
    },
  },
};
