import { defineField } from 'sanity';

export const ScriptureSchema = {
  name: 'scripture',
  title: 'Scripture',
  type: 'object',
  fields: [
    defineField({
      name: 'passage',
      title: 'Pasage',
      type: 'string',
    }),
    defineField({
      name: 'verse',
      title: 'Verse',
      type: 'string',
    }),
  ],
};
