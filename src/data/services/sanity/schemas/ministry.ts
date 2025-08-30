import { defineField } from "sanity";

export const MinistrySchema = {
  name: 'ministry',
  title: 'Ministries',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().error('Enter the Ministry name.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required().error('Generate the Ministry slug.'),
    }),
    defineField({
      name: 'scripture',
      title: 'Scripture',
      type: 'scripture',
      description: 'Include the guiding bibilical scripture that represents this ministry.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Describe the ministry (1-3 paragraphs).',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required().error('Write a description for the ministry.'),
    }),
    defineField({
      name: 'coordinators',
      title: 'Coordinators',
      description: 'List the coordinators for this ministry.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'leader' }] }],
      validation: (rule) => rule.required().error("List the Ministry's coordinators."),
    }),
    defineField({
      name: 'coach',
      title: 'Coach',
      description: 'Select the coach for this ministry.',
      type: 'reference',
      to: [{ type: 'leader' }],
      validation: (rule) => rule.required().error("Add the Ministry's coach."),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image representing the ministry.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
          validation: (rule) =>
            rule
              .required()
              .error('Please add an alt description; this is helpful for seo and accessibility.'),
        },
      ],
      validation: (rule) => rule.required().error('Add an image depicting the ministry.'),
    }),
    defineField({
      name: 'meeting_details',
      title: 'Meeting Details',
      type: 'array',
      description: 'Include one or more meeting days, times, and locations.',
      validation: (rule) => rule.min(1).error('At least one meeting is required.'),
      of: [{ type: 'meetingDetailsType' }],
    }),
  ],
};
