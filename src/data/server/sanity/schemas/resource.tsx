import FileIcon from '@/components/icons/file';
import LinkIcon from '@/components/icons/link-icon';
import Play from '@/components/icons/play';
import { SanityResourceCategories, SanityResourceTypes } from '@/data/types';
import { defineField } from 'sanity';

export const ResourceSchema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Resource Type',
      description:
        'Choose what kind of resource this is. “File” is for downloadable documents. “Link” is for websites or videos.',
      options: {
        list: SanityResourceTypes,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A one sentence explanation of what this resource is or how it should be used.',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Choose the group this resource belongs to.',
      options: {
        list: SanityResourceCategories,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      type: 'file',
      title: 'Upload File',
      description: 'Upload a downloadable file (PDF, DOCX, etc.).',
      hidden: ({ document }) => document?.type !== 'File',
      options: { storeOriginalFilename: true },
    }),
    defineField({
      name: 'file_size',
      type: 'string',
      title: 'File Size',
      description: 'Add the file size or format (e.g., “PDF – 497 KB”).',
      hidden: ({ document }) => document?.type !== 'File',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'External URL',
      description:
        'Paste a link to an external resource such as a YouTube video, website, or online document.',
      hidden: ({ document }) => document?.type === 'File',
    }),
    defineField({
      name: 'is_active',
      type: 'boolean',
      title: 'Is Active',
      description: 'Toggle to hide the resource from the website without deleting it.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      is_active: 'is_active',
    },
    prepare({ title, type, is_active }: { title: string; type: string; is_active: boolean }) {
      return {
        title,
        subtitle: `${type} - ${is_active ? 'Active' : 'Hidden'}`,
        media: type === 'File' ? <FileIcon /> : type === 'Link' ? <LinkIcon /> : <Play />,
      };
    },
  },
};
