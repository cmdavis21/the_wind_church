import { PageRoutes } from '@/data/page-routes';
import { defineField } from 'sanity';

export const PromoBannerSchema = {
  name: 'promoBanner',
  title: 'Promotional Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      description: 'What is the subject of this promotion?',
      type: 'string',
      validation: (rule) => rule.required().error('Enter a header title (e.g., Upcoming Event!).'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'What is the descriptive title of this promotion?',
      type: 'string',
      validation: (rule) =>
        rule.required().error('Enter a title title (e.g., Worship Night — This Friday at 7 PM).'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'What is the description of this promotion?',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .error(
            'Enter a description title (e.g., Join us for a powerful night of worship and prayer as we seek God together.).'
          ),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Select an internal link on the website',
      options: {
        list: Object.entries(PageRoutes).map(([key, value]) => ({
          title: key,
          value: value,
        })),
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image of the promotion',
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
      validation: (rule) => rule.required().error('Add a image for the promotion.'),
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Video',
      description: 'Short video of the promotion',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Promotional Banner',
        subtitle: '',
      };
    },
  },
};
