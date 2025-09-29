import Books from '@/components/icons/books';
import { defineField } from 'sanity';

export const DeepDiveSchema = {
  name: 'deepDive',
  title: 'Deep Dives',
  type: 'document',
  icon: Books,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().error('Enter the Deep Dive name.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required().error('Generate the Deep Dive slug.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Describe the deep dive (1-3 paragraphs).',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required().error('Write a description for the deep dive.'),
    }),
    defineField({
      name: 'principles',
      title: 'Principles',
      type: 'array',
      description: 'What are the core principles/goals of this deep dive?',
      validation: (rule) => rule.min(1).error('At least one meeting is required.'),
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'instructors',
      title: 'Instructors',
      description: 'List the instructors for this deep dive.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'leader' }] }],
      validation: (rule) => rule.required().error('Select the Deep Dive instructors.'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image representing the deep dive.',
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
      validation: (rule) => rule.required().error('Add an image depicting the deep dive course.'),
    }),
    defineField({
      name: 'start_date',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required().error('Add the Deep Dive start date.'),
    }),
    defineField({
      name: 'end_date',
      title: 'End Date',
      type: 'date',
      validation: (rule) => rule.required().error('Add the Deep Dive start date.'),
    }),
    defineField({
      name: 'required_materials',
      title: 'Required Materials',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'meeting_details',
      title: 'Meeting Details',
      type: 'array',
      description: 'Include one or more meeting days, times, and locations.',
      validation: (rule) => rule.min(1).error('At least one meeting is required.'),
      of: [{ type: 'meetingDetailsType' }],
    }),
    defineField({
      name: 'accepting_new_students',
      title: 'Accepting New Students',
      description: 'Is this deep dive actively accepting new Students?',
      type: 'boolean',
    }),
  ],
};
