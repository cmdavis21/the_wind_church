import { defineField, defineType } from 'sanity';

export const LocationSchema = defineType({
  name: 'location',
  type: 'object',
  title: 'Location',
  description: 'Where is the event happening.',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'state',
      type: 'string',
      title: 'State',
      initialValue: 'CA',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'zip',
      type: 'string',
      title: 'Zip Code',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sublocation',
      type: 'string',
      title: 'Sublocation',
      description: 'e.g., "Room 204", "Fellowship Hall", "Building B, 2nd floor"',
    }),
  ],
  validation: (rule) => rule.required().error('Enter where the event is happening.'),
});
