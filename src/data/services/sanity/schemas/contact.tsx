import { defineField } from 'sanity';

export const ContactSchema = {
  name: 'contact',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required().error('Add a first name to this contact.'),
    }),
    defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required().error('Add a last name to this contact.'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) =>
        rule.max(20).warning(`A phone number shouldn't be more than 20 digits.`),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
  ],
  preview: {
    select: {
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email',
    },
    prepare({
      first_name,
      last_name,
      email,
    }: {
      first_name: string;
      last_name: string;
      email: string;
    }) {
      return {
        title: `${first_name} ${last_name}`,
        subtitle: email || '',
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
