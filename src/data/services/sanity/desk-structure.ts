import { StructureResolver } from "sanity/structure";

import AddressBook from "@/components/icons/addressBook";
import GlobePointer from "@/components/icons/globePointer";
import PencilPaper from "@/components/icons/pencilPaper";
import Calendar from "@/components/icons/calendar";
import TV from "@/components/icons/tv";
import HandHoldingBox from "@/components/icons/handHoldingBox";
import Cross from "@/components/icons/cross";
import Bullhorn from "@/components/icons/bullhorn";
import LinkIcon from "@/components/icons/link";
import Clock from "@/components/icons/clock";
import PeopleGroup from "@/components/icons/peopleGroup";
import ChildReaching from "@/components/icons/childReaching";
import Books from "@/components/icons/books";
import PersonWithSign from "@/components/icons/personWithSign";

type docAttrType = {
  id: string;
  title: string;
  icon: React.FC<React.SVGAttributes<unknown>>;
};

const websiteDocsWithIcons: docAttrType[] = [
  { id: "event", title: "Events", icon: Calendar },
  { id: "ministry", title: "Ministries", icon: PeopleGroup },
  { id: "leader", title: "Leaders", icon: PersonWithSign },
  { id: "deepDive", title: "Deep Dives", icon: Books },
];

const formsDocsWithIcons: docAttrType[] = [
  { id: "prayerRequest", title: "Prayer Requests", icon: Cross },
  { id: "scheduledVisit", title: "Scheduled Visits", icon: Clock },
  { id: "rightnowMedia", title: "Rightnow Media Signups", icon: TV },
  { id: "eventRental", title: "Event Rental Inquiries", icon: Calendar },
  { id: "giftAssessment", title: "Gift Assessments", icon: HandHoldingBox },
  {
    id: "ministryConnection",
    title: "Ministry Connection",
    icon: LinkIcon,
  },
  {
    id: "visitorFeedback",
    title: "Visitor Feedback",
    icon: Bullhorn,
  },
  {
    id: "youthServiceRegistration",
    title: "Youth Service Registration",
    icon: ChildReaching,
  },
];

export const sanityStudioStructure: StructureResolver = (S) =>
  S.list()
    .title("The Wind Church")
    .items([
      S.listItem()
        .title("Contacts")
        .icon(AddressBook)
        .child(S.documentTypeList("contact").title("Contacts")),

      S.listItem()
        .title("Forms")
        .icon(PencilPaper)
        .child(
          S.list()
            .title("Forms")
            .items(
              formsDocsWithIcons.map(({ id, title, icon }) =>
                S.listItem()
                  .title(title)
                  .icon(icon)
                  .child(S.documentTypeList(id).title(title))
              )
            )
        ),

      S.listItem()
        .title("Website")
        .icon(GlobePointer)
        .child(
          S.list()
            .title("Website")
            .items([
              ...websiteDocsWithIcons.map(({ id, title, icon }) =>
                S.listItem()
                  .title(title)
                  .icon(icon)
                  .child(S.documentTypeList(id).title(title))
              ),
              S.listItem()
                .title("Youth Service")
                .icon(ChildReaching)
                .child(
                  S.document()
                    .title("Youth Service")
                    .schemaType("youthService")
                    .documentId("youthService")
                ),
            ])
        ),

      // fallback for uncategorized document types
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "contact",
            ...formsDocsWithIcons.map((f) => f.id),
            ...websiteDocsWithIcons.map((w) => w.id),
            "youthService",
          ].includes(item.getId()!)
      ),
    ]);
