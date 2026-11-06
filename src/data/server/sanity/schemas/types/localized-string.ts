import { LOCALES } from '@/data/i18n/utils';
import { defineField, defineType } from 'sanity';

export const LocalizedString = defineType({
  name: 'localizedString',
  title: 'Localized String',
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
      type: 'string',
      validation: (rule) => (lang.isDefault ? rule.required() : rule),
      fieldset: lang.isDefault ? undefined : 'translations',
    })
  ),
  preview: { select: { title: 'en' } },
});
