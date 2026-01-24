import { defineField } from 'sanity';

export const VisitorFeedbackSchema = {
  name: 'visitorFeedback',
  title: 'Visitor Feeback',
  type: 'document',
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{ type: 'contact' }],
      readOnly: true,
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      first_name: 'contact.first_name',
      last_name: 'contact.last_name',
      feedback: 'feedback',
    },
    prepare({
      first_name,
      last_name,
      feedback,
    }: {
      first_name: string;
      last_name: string;
      feedback: string;
    }) {
      return {
        title: `${feedback.slice(0, 32)}...`,
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
