import { defineField } from 'sanity';

export const MinistrySchema = {
  name: 'ministry',
  title: 'Ministries',
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
      validation: (rule) => rule.required().error('Enter the Ministry name.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.en' },
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
      type: 'localizedPortableText',
      description: 'Describe the ministry (1-3 paragraphs).',
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
  ],
  preview: {
    select: {
      name: 'name.en',
      image: 'image',
    },
    prepare({ name, image }: { name: string; image?: { asset: any } }) {
      return {
        title: name,
        media: image,
      };
    },
  },
};
