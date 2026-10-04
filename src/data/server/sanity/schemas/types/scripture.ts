import { defineField, defineType } from 'sanity';

export const ScriptureSchema = defineType({
  name: 'scripture',
  title: 'Scripture',
  type: 'object',
  fields: [
    defineField({
      name: 'passage',
      title: 'Pasage',
      type: 'text',
    }),
    defineField({
      name: 'verse',
      title: 'Verse',
      type: 'string',
    }),
  ],
});
