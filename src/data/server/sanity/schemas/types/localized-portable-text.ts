import { LOCALES } from '@/data/i18n/utils';
import { defineField, defineType } from 'sanity';

export const LocalizedPortableText = defineType({
  name: 'localizedPortableText',
  title: 'Localized Content',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: LOCALES.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.name,
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => (lang.isDefault ? rule.required() : rule),
      fieldset: lang.isDefault ? undefined : 'translations',
    })
  ),
  preview: { select: { title: 'en' } },
});
