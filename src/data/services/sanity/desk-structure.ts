import { StructureResolver } from 'sanity/structure';

import AddressBook from '@/components/icons/addressBook';
import Books from '@/components/icons/books';
import Bullhorn from '@/components/icons/bullhorn';
import Calendar from '@/components/icons/calendar';
import ChildReaching from '@/components/icons/childReaching';
import Clock from '@/components/icons/clock';
import GlobePointer from '@/components/icons/globePointer';
import HandHoldingBox from '@/components/icons/handHoldingBox';
import LinkIcon from '@/components/icons/link';
import PencilPaper from '@/components/icons/pencilPaper';
import PeopleGroup from '@/components/icons/peopleGroup';
import PersonWithSign from '@/components/icons/personWithSign';
import PrayerHands from '@/components/icons/prayerHands';
import Tag from '@/components/icons/tag';
import TV from '@/components/icons/tv';

type docAttributes = {
  id: string;
  title: string;
  icon: React.FC<React.SVGAttributes<unknown>>;
};

const websiteDocsWithIcons: docAttributes[] = [
  { id: 'event', title: 'Events', icon: Calendar },
  { id: 'ministry', title: 'Ministries', icon: PeopleGroup },
  { id: 'leader', title: 'Leaders', icon: PersonWithSign },
  { id: 'deepDive', title: 'Deep Dives', icon: Books },
];

const formsDocsWithIcons: docAttributes[] = [
  { id: 'prayerRequest', title: 'Prayer Requests', icon: PrayerHands },
  { id: 'scheduledVisit', title: 'Scheduled Visits', icon: Clock },
  { id: 'rightnowMedia', title: 'Rightnow Media Signups', icon: TV },
  { id: 'eventRental', title: 'Event Rental Inquiries', icon: Calendar },
  { id: 'giftAssessment', title: 'Gift Assessments', icon: HandHoldingBox },
  { id: 'ministryConnection', title: 'Ministry Connection', icon: LinkIcon },
  { id: 'visitorFeedback', title: 'Visitor Feedback', icon: Bullhorn },
  { id: 'nextGenRosterSignup', title: 'Next Gen Roster Signup', icon: ChildReaching },
];

export const sanityStudioStructure: StructureResolver = (S) =>
  S.list()
    .title('Sanity.io Content')
    .items([
      // CONTACTS
      S.listItem()
        .title('Contacts')
        .icon(AddressBook)
        .child(S.documentTypeList('contact').title('Contacts')),

      // WEBSITE CM
      S.listItem()
        .title('Website')
        .icon(GlobePointer)
        .child(
          S.list()
            .title('Website')
            .items([
              ...websiteDocsWithIcons.map(({ id, title, icon }) =>
                S.listItem().title(title).icon(icon).child(S.documentTypeList(id).title(title))
              ),
              S.listItem()
                .title('Next Gen')
                .icon(ChildReaching)
                .child(
                  S.document().title('Next Gen').schemaType('nextGenPage').documentId('nextGenPage')
                ),
            ])
        ),

      // FORMS
      S.listItem()
        .title('Forms')
        .icon(PencilPaper)
        .child(
          S.list()
            .title('Forms')
            .items(
              formsDocsWithIcons.map(({ id, title, icon }) =>
                S.listItem().title(title).icon(icon).child(S.documentTypeList(id).title(title))
              )
            )
        ),

      // SHOPIFY
      S.listItem()
        .title('Shopify Products')
        .icon(Tag)
        .child(S.documentTypeList('product').title('Shopify Products')),

      // fallback for uncategorized document types
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'contact',
            ...websiteDocsWithIcons.map((w) => w.id),
            'nextGenPage',
            ...formsDocsWithIcons.map((f) => f.id),
            'product',
          ].includes(item.getId()!)
      ),
    ]);
