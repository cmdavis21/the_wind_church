import { defineField } from 'sanity';

export const PromoBannerSchema = {
  name: 'promoBanner',
  title: 'Promotional Banner',
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
      name: 'header',
      title: 'Header',
      description: 'Example: Upcoming Event!',
      type: 'localizedString',
      validation: (rule) => rule.required().error(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Example: Worship Night — This Friday at 7 PM',
      type: 'localizedString',
      validation: (rule) => rule.required().error(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'Example: Join us for a powerful night of worship and prayer as we seek God together.',
      type: 'localizedText',
      validation: (rule) => rule.required().error(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
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
      name: 'video',
      type: 'file',
      title: 'Short Video',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Promotional Banner',
        subtitle: 'Display content in the Website Footer',
      };
    },
  },
};
