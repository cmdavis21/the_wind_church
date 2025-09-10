import { defineField } from 'sanity';

import FileIcon from '@/components/icons/file';
import Bullhorn from '@/components/icons/bullhorn';

export const VisitorFeedbackSchema = {
  name: 'visitorFeedback',
  title: 'Visitor Feeback',
  type: 'document',
  icon: Bullhorn,
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
