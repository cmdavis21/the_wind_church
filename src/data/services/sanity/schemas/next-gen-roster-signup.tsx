import { defineField } from 'sanity';

export const NextGenRosterSignupSchema = {
  name: 'nextGenRosterSignup',
  title: 'Next Gen Roster Signup',
  type: 'document',
  fields: [
    defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'hobbies',
      title: 'Hobbies',
      type: 'text',
    }),
    defineField({
      name: 'allergies',
      title: 'Allergies',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'guardians',
      title: 'Guardians',
      type: 'array',
      of: [
        {
          type: 'nextGenRosterSignupGuardian',
        },
      ],
    }),
  ],
  preview: {
    select: {
      first_name: 'first_name',
      last_name: 'last_name',
    },
    prepare({ first_name, last_name }: { first_name: string; last_name: string }) {
      return {
        title: `${first_name} ${last_name.charAt(0)}.`,
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
