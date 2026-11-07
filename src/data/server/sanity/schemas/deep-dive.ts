import { formatDateMMMddyyyy } from '@/data/format-date';
import { defineField } from 'sanity';

export const DeepDiveSchema = {
  name: 'deepDive',
  title: 'Christian Life Development',
  type: 'document',
  fieldsets: [
    {
      name: 'image_content',
      title: 'Image Content',
      options: { collapsible: false, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localizedString',
      validation: (rule) => rule.required().error('Enter the course name.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.en' },
      validation: (rule) => rule.required().error('Generate the course slug.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedPortableText',
      description: 'Describe the course (1-3 paragraphs).',
      validation: (rule) => rule.required().error('Write a description for the course.'),
    }),
    defineField({
      name: 'instructors',
      title: 'Instructors',
      description: 'List the instructors for this course.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'leader' }] }],
      validation: (rule) => rule.required().error('Select the course instructors.'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'image_content',
      validation: (rule) => rule.required().error('Add an image depicting the course.'),
    }),
    defineField({
      name: 'image_alt',
      type: 'localizedString',
      title: 'Image Alt',
      fieldset: 'image_content',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!context.document?.image) return true;
          if (typeof value === 'object' && value !== null && 'en' in value && value.en) return true;
          return 'Alt text is required when an image is provided.';
        }),
    }),
    defineField({
      name: 'start_date',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required().error('Add the course start date.'),
    }),
    defineField({
      name: 'end_date',
      title: 'End Date',
      type: 'date',
      validation: (rule) => rule.required().error('Add the course start date.'),
    }),
    defineField({
      name: 'required_materials',
      title: 'Required Materials',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'meeting_details',
      title: 'Meeting Details',
      type: 'array',
      description: 'Include one or more meeting days, times, and locations.',
      validation: (rule) => rule.min(1).error('At least one meeting is required.'),
      of: [{ type: 'meetingDetails' }],
    }),
    defineField({
      name: 'accepting_new_students',
      title: 'Accepting New Students',
      description: 'Is this course actively accepting new Students?',
      type: 'boolean',
      validation: (rule) => rule.required().error('Select a response.'),
    }),
  ],
  preview: {
    select: {
      name: 'name.en',
      start_date: 'start_date',
      end_date: 'end_date',
      image: 'image',
    },
    prepare({
      name,
      start_date,
      end_date,
      image,
    }: {
      name: string;
      start_date: Date;
      end_date: Date;
      image?: { asset: any };
    }) {
      return {
        title: name,
        subtitle: `${formatDateMMMddyyyy(start_date)} - ${formatDateMMMddyyyy(end_date)}`,
        media: image,
      };
    },
  },
};
