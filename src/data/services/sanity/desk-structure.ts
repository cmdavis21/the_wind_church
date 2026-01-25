import { StructureResolver } from 'sanity/structure';

import Bullhorn from '@/components/icons/bullhorn';
import Calendar from '@/components/icons/calendar';
import ChildReaching from '@/components/icons/child-reaching';

import PencilPaper from '@/components/icons/pencilPaper';

import AddressCard from '@/components/icons/address-card';
import Gift from '@/components/icons/gift';
import Globe from '@/components/icons/globe';
import Handshake from '@/components/icons/handshake';
import PeopleGroup from '@/components/icons/people-group';
import PersonPraying from '@/components/icons/person-praying';
import PersonWithChalkboard from '@/components/icons/person-with-chalkboard';
import Question from '@/components/icons/question';
import User from '@/components/icons/user';

type docAttributes = {
  id: string;
  title: string;
  icon: React.FC<React.SVGAttributes<unknown>>;
};

const singleUseDocsWithIcons: docAttributes[] = [
  { id: 'nextGenPage', title: 'Next Gen', icon: ChildReaching },
  { id: 'promoBanner', title: 'Promotional Banner', icon: Bullhorn },
];

const websiteDocsWithIcons: docAttributes[] = [
  { id: 'event', title: 'Events', icon: Calendar },
  { id: 'ministry', title: 'Ministries', icon: PeopleGroup },
  { id: 'leader', title: 'Leaders', icon: User },
  { id: 'deepDive', title: 'Deep Dives', icon: PersonWithChalkboard },
];

const formsDocsWithIcons: docAttributes[] = [
  { id: 'prayerRequest', title: 'Prayer Requests', icon: PersonPraying },
  { id: 'eventRental', title: 'Event Rental Inquiries', icon: Calendar },
  { id: 'giftAssessment', title: 'Gift Assessments', icon: Gift },
  { id: 'ministryConnection', title: 'Ministry Connection', icon: Handshake },
  { id: 'visitorFeedback', title: 'Visitor Feedback', icon: Bullhorn },
  { id: 'nextGenGuardianInquiry', title: 'Next Gen Guardian Inquiry', icon: Question },
];

export const sanityStudioStructure: StructureResolver = (S) =>
  S.list()
    .title('Sanity.io Content')
    .items([
      // CONTACTS
      S.listItem()
        .title('Contacts')
        .icon(AddressCard)
        .child(S.documentTypeList('contact').title('Contacts')),

      // WEBSITE CM
      S.listItem()
        .title('Website')
        .icon(Globe)
        .child(
          S.list()
            .title('Website')
            .items([
              ...websiteDocsWithIcons.map(({ id, title, icon }) =>
                S.listItem().title(title).icon(icon).child(S.documentTypeList(id).title(title))
              ),
              ...singleUseDocsWithIcons.map(({ id, title, icon }) =>
                S.listItem()
                  .title(title)
                  .icon(icon)
                  .child(S.document().title(title).schemaType(id).documentId(id))
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

      // fallback for uncategorized document types
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'contact',
            ...websiteDocsWithIcons.map((w) => w.id),
            ...singleUseDocsWithIcons.map((w) => w.id),
            ...formsDocsWithIcons.map((f) => f.id),
          ].includes(item.getId()!)
      ),
    ]);
