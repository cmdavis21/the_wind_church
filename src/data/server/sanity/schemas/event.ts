import { formatDateMMMddyyyy } from '@/data/format-date';
import { SanityEventCategories } from '@/data/types';
import { defineField } from 'sanity';

export const EventSchema = {
  name: 'event',
  title: 'Events',
  type: 'document',
  fieldsets: [
    {
      name: 'event_time',
      title: 'Event Times',
      options: { collapsible: false, collapsed: false },
    },
    {
      name: 'event_organizer',
      title: 'Event Organizer',
      options: { collapsible: false, collapsed: false },
    },
    {
      name: 'image_content',
      title: 'Image Content',
      options: { collapsible: false, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localizedString',
      validation: (rule) => rule.required().error('Enter the event name.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Describe the event.',
      validation: (rule) => rule.required().error('Describe the event.'),
    }),
    defineField({
      name: 'start_date_time',
      title: 'Start Date and Time',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        allowTimeZoneSwitch: true,
      },
      fieldset: 'event_time',
      validation: (rule) => rule.required().error('Enter the event start time.'),
    }),
    defineField({
      name: 'end_date_time',
      title: 'End Date and Time (Optional)',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        allowTimeZoneSwitch: true,
      },
      fieldset: 'event_time',
      validation: (Rule) =>
        Rule.custom((endTime, context) => {
          const startTime = context.document?.start_date_time;

          if (typeof startTime === 'string' && typeof endTime === 'string') {
            if (Date.parse(endTime) < Date.parse(startTime)) {
              return 'End time must occur after start time.';
            }
          }

          return true;
        }),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Add up to 3 categories/key-terms relating to this event.',
      validation: (Rule) => Rule.max(3),
      of: [
        defineField({
          name: 'category',
          type: 'string',
          options: { list: SanityEventCategories },
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      fieldset: 'image_content',
      validation: (rule) => rule.required().error('Add an image depicting the course.'),
    }),
    defineField({
      name: 'image_alt',
      type: 'localizedString',
      title: 'Image Alt',
      fieldset: 'image_content',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!context.document?.image) return true;
          if (typeof value === 'object' && value !== null && 'en' in value && value.en) return true;
          return 'Alt text is required when an image is provided.';
        }),
    }),
    defineField({
      name: 'location',
      type: 'location',
      title: 'Location',
    }),
    defineField({
      name: 'how_to_signup',
      type: 'localizedText',
      title: 'How to Signup',
      description: 'Instructions for how to join/participate in this event.',
    }),
    defineField({
      name: 'associated_ministry',
      title: 'Associated Ministry',
      type: 'reference',
      to: [{ type: 'ministry' }],
      description: 'Select if a Ministry is associated with this event.',
      fieldset: 'event_organizer',
    }),
    defineField({
      name: 'external_organizer',
      type: 'string',
      title: 'External Organizer',
      description: 'Is there an external organization for this event?',
      fieldset: 'event_organizer',
    }),
    defineField({
      name: 'help_needed',
      type: 'array',
      title: 'Help Needed',
      description: 'List any open positions for help during this event.',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'cost',
      type: 'localizedString',
      title: 'Cost',
      description:
        'Are there any costs associated with participation in this event? (e.g., $40.00 per Adult ticket)',
    }),
    defineField({
      name: 'additional_notes',
      type: 'localizedText',
      title: 'Additional Notes',
      description: 'Are there any additional notes or instructions to add?',
    }),
  ],
  preview: {
    select: {
      name: 'name.en',
      start_date: 'start_date_time',
      image: 'image',
    },
    prepare({
      name,
      start_date,
      image,
    }: {
      name: string;
      start_date: Date;
      image?: { asset: any };
    }) {
      return {
        title: name,
        subtitle: formatDateMMMddyyyy(start_date),
        media: image,
      };
    },
  },
};
