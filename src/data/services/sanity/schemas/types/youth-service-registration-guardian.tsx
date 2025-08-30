import { defineField } from 'sanity';

export const YouthServiceRegistrationGuardianSchema = {
  name: 'youthServiceRegistrationGuardian',
  title: 'Youth Service Registration Guardian',
  type: 'object',
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{ type: 'contact' }],
      readOnly: true,
    }),
    defineField({
      name: 'relationship_to_child',
      title: 'Relationship To Child',
      type: 'string',
      readOnly: true,
    }),
  ],
};
