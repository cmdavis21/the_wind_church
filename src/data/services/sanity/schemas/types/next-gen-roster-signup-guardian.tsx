import { defineField } from 'sanity';

export const NextGenRosterSignupGuardianSchema = {
  name: 'nextGenRosterSignupGuardian',
  title: 'Next Gen Roster Signup Guardian',
  type: 'object',
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{ type: 'contact' }],
      readOnly: true,
    }),
    defineField({
      name: 'relationship_to_child',
      title: 'Relationship To Child',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      first_name: 'contact.first_name',
      last_name: 'contact.last_name',
      relationship_to_child: 'relationship_to_child',
    },
    prepare({
      first_name,
      last_name,
      relationship_to_child,
    }: {
      first_name: string;
      last_name: string;
      relationship_to_child: string;
    }) {
      return {
        title: `${first_name} ${last_name}`,
        subtitle: relationship_to_child,
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
