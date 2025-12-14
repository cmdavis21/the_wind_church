import Sun from '@/components/icons/sun';
import { defineField } from 'sanity';

export const ProductOption = defineField({
  title: 'Product Option',
  name: 'option',
  type: 'object',
  icon: Sun,
  readOnly: true,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Values',
      name: 'values',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const { name } = selection;

      return {
        title: name,
      };
    },
  },
});
