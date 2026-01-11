import { defineField } from 'sanity';

import FileIcon from '@/components/icons/file';

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
      feedback: 'feedback',
    },
    prepare({ feedback }: { feedback: string }) {
      return {
        title: `${feedback.slice(0, 32)}...`,
        media: <FileIcon />,
      };
    },
  },
};
