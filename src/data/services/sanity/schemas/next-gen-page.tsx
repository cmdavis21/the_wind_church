import ChildReaching from '@/components/icons/childReaching';
import { defineField } from 'sanity';

export const NextGenPageSchema = {
  name: 'nextGenPage',
  title: 'Next Gen Page',
  type: 'document',
  icon: ChildReaching,
  fields: [
    defineField({
      name: 'educators',
      title: 'Educators & Caretakers',
      description: 'Select educators/caretakers of our Next Gen youth.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'leader' }] }],
      validation: (rule) => rule.required().error('Select at least one Leader.'),
    }),
    defineField({
      name: 'cirriculum_file',
      type: 'file',
      title: 'Cirriculum',
      description: 'Upload a PDF of the Next Gen cirriculum to be download applicable.',
    }),
  ],
};
