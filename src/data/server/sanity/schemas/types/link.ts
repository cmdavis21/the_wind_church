import { PageRoutes } from '@/data/page-routes';
import { defineField, defineType } from 'sanity';

export const LinkSchema = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Button Label',
      validation: (rule) => rule.required().error('Add a label (e.g., "Learn More")'),
    }),
    defineField({
      name: 'internal_href',
      type: 'string',
      title: 'Internal Page',
      options: {
        list: [
          { title: 'About', value: PageRoutes.about },
          { title: 'Bookstore', value: PageRoutes.bookstore },
          { title: 'Church Rental', value: PageRoutes.churchRental },
          { title: 'Deep Dive', value: PageRoutes.deepDive },
          { title: 'Events', value: PageRoutes.events },
          { title: 'Feedback', value: PageRoutes.feedback },
          { title: 'Gallery', value: PageRoutes.gallery },
          { title: 'Gift Assessment', value: PageRoutes.giftAssessment },
          { title: 'Give', value: PageRoutes.give },
          { title: 'Ministries', value: PageRoutes.ministries },
          { title: 'Next Gen', value: PageRoutes.nextGen },
          { title: 'Prayer Requests', value: PageRoutes.prayerRequests },
          { title: 'PushPay', value: PageRoutes.pushpay },
          { title: 'RightNow Media', value: PageRoutes.rightnowMedia },
          { title: 'Salvation', value: PageRoutes.salvation },
          { title: 'Sermons', value: PageRoutes.sermons },
          { title: 'Wind Leaders', value: PageRoutes.windLeaders },
        ],
      },
    }),
    defineField({
      name: 'external_href',
      type: 'url',
      title: 'External URL',
      description: 'Optional external link (e.g., https://example.com)',
    }),
  ],
  validation: (rule) =>
    rule.custom((fields) => {
      if (!fields) return true;

      const hasInternal = Boolean(fields.internal_href);
      const hasExternal = Boolean(fields.external_href);

      if (!hasInternal && !hasExternal) {
        return 'You must provide either an internal link or an external URL.';
      }

      return true;
    }),
});
