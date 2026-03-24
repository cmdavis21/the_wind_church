import { defineField } from 'sanity';

export const TestimonialSchema = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{ type: 'contact' }],
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'Select a position this person belongs to.',
      options: {
        list: [
          { title: 'Leader', value: 'Leader' },
          { title: 'Member', value: 'Member' },
          { title: 'Visitor', value: 'Visitor' },
          { title: 'Staff', value: 'Staff' },
        ],
      },
      validation: (rule) => rule.required().error('You must select a category.'),
    }),
    defineField({
      name: 'main_point',
      title: 'Main Point',
      type: 'text',
      description:
        'This highlights the big idea or main point of their testimony (1 sentence max).',
      validation: (rule) => rule.required().error('Add a highlighting feature.'),
    }),
    defineField({
      name: 'statement',
      title: 'Statement',
      type: 'text',
      description: "The person's statement (1-3 sentences).",
      validation: (rule) => rule.required().error('Add a statement.'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Poster image of person.',
      validation: (rule) => rule.required().error('Add a profile picture of the person.'),
    }),
  ],
  preview: {
    select: {
      first_name: 'contact.first_name',
      last_name: 'contact.last_name',
      image: 'image',
    },
    prepare({
      first_name,
      last_name,
      image,
    }: {
      first_name: string;
      last_name: string;
      image?: { asset: any };
    }) {
      return {
        title: `${first_name} ${last_name}`,
        media: image || (
          <span>
            {first_name.charAt(0).toUpperCase()}
            {last_name.charAt(0).toUpperCase()}
          </span>
        ),
      };
    },
  },
};
