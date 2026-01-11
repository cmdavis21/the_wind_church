import { defineField } from 'sanity';

export const GiftAssessmentSchema = {
  name: 'giftAssessment',
  title: 'Gift Assessments',
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
      name: 'dominate_gifts',
      title: 'Dominate Gifts',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'subordinate_gifts',
      title: 'Subordinate Gifts',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'ministries_involved_in',
      title: 'What ministries are you now performing (formally or informally) in the Body?',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'change_in_ministry',
      title:
        'Are there any of these ministries that you are not especially gifted for? God may be calling you to consider changes.',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'lay_or_clergy',
      title: 'Is your vocational status lay or clergy?',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      first_name: 'contact.first_name',
      last_name: 'contact.last_name',
    },
    prepare({ first_name, last_name }: { first_name: string; last_name: string }) {
      return {
        title: `${first_name} ${last_name}`,
        media: (
          <span>
            {first_name.charAt(0)}
            {last_name.charAt(0)}
          </span>
        ),
      };
    },
  },
};
